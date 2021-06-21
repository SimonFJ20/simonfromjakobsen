
//
//  Wolfenstein like rendering program
//  Version 1.0
//
//  File:   main.js
//      Main files, who would have guessed
//
//  Made on:
//      19-6-2012
//
//  Author:
//      Simon From Jakobsen
//      simonfromjakobsen@gmail.com
//      +45 6060 2456
//      www.simonfj20.site
//      www.github.com/SimonFJ20
//
//  Inspirations:
//      https://www.youtube.com/watch?v=xW8skO7MFYw
//

const nScreenWidth = 120;
const nScreenHeight = 40;

let fPlayerX = 8;
let fPlayerY = 8;
let fPlayerA = 0;

const nMapWidth = 16;
const nMapHeight = 16;

const fFOV = Math.PI / 4;
const fDepth = 16;

// const screen = util_getNewEmptyScreenBuffer(nScreenWidth, nScreenHeight);
const screen = [];

let mapString = '';
mapString += '################';
mapString += '#..............#';
mapString += '#..............#';
mapString += '#..............#';
mapString += '#...#..........#';
mapString += '#..............#';
mapString += '#..............#';
mapString += '#...#..........#';
mapString += '#..............#';
mapString += '#..........#...#';
mapString += '#..............#';
mapString += '#..............#';
mapString += '#.#####........#';
mapString += '#..............#';
mapString += '#..............#';
mapString += '################';

let map = [];
for (let i = 0; i < mapString.length; i++)
    map[i] = mapString.charAt(i);

let tp1 = util_getCurrentTimeInSeconds();
let tp2 = 0;

// dom friendly "recursive" loop equivalent to while (true)
const gameLoop = () => {

    tp2 = util_getCurrentTimeInSeconds();
    let fElapsedTime = tp2 - tp1;
    tp1 = tp2;

    if (util_keyIsPressed('a'))
        fPlayerA -= 0.8 * fElapsedTime;

    if (util_keyIsPressed('d'))
        fPlayerA += 0.8 * fElapsedTime;

    if (util_keyIsPressed('w')) {
        fPlayerX += Math.sin(fPlayerA) * 5 * fElapsedTime;
        fPlayerY += Math.cos(fPlayerA) * 5 * fElapsedTime;

        if(map[Math.floor(fPlayerY) * nMapWidth + Math.floor(fPlayerX)] === '#') {
            fPlayerX -= Math.sin(fPlayerA) * 5 * fElapsedTime;
            fPlayerY -= Math.cos(fPlayerA) * 5 * fElapsedTime
        }
    }
    
    if (util_keyIsPressed('s')) {
        fPlayerX -= Math.sin(fPlayerA) * 5 * fElapsedTime;
        fPlayerY -= Math.cos(fPlayerA) * 5 * fElapsedTime;

        if(map[Math.floor(fPlayerY) * nMapWidth + Math.floor(fPlayerX)] === '#') {
            fPlayerX += Math.sin(fPlayerA) * 5 * fElapsedTime;
            fPlayerY += Math.cos(fPlayerA) * 5 * fElapsedTime
        }
    }

    for (let x = 0; x < nScreenWidth; x++) {
        let fRayAngle = (fPlayerA - fFOV / 2) + (x / nScreenWidth) * fFOV;

        let fDistanceToWall = 0;
        let bHitWall = false;
        let bBoundary = false;

        let fEyeX = Math.sin(fRayAngle);
        let fEyeY = Math.cos(fRayAngle);

        while (!bHitWall && fDistanceToWall < fDepth) {
            fDistanceToWall += 0.1;

            let nTestX = Math.floor(fPlayerX + fEyeX * fDistanceToWall);
            let nTestY = Math.floor(fPlayerY + fEyeY * fDistanceToWall);

            if (nTestX < 0 || nTestX >= nMapWidth || nTestY < 0 || nTestY >= nMapHeight) {
                bHitWall = true;
                fDistanceToWall = fDepth;
            } else {
                if (map[nTestY * nMapWidth + nTestX] === '#') {
                    bHitWall = true;

                    // c++: std::vector<std::pair<float, float>> p;
                    // typescript: const p: {first: number, second: number}[] = []
                    const p = [];
                    
                    for (let tx = 0; tx < 2; tx++) {
                        for (let ty = 0; ty < 2; ty++) {
                            let vx = nTestX + tx - fPlayerX;
                            let vy = nTestY + ty - fPlayerY;
                            let d = Math.sqrt(vx * vx + vy * vy);
                            let dot = (fEyeX * vx / d) + (fEyeY * vy / d);
                            p.push({first: d, second: dot});
                        }
                    }

                    util_emulatedSortFunctionThatRequiresAnExplanation(p);

                    let fBound = 0.01;
                    if (Math.acos(p[0].second) < fBound) bBoundary = true;
                    if (Math.acos(p[1].second) < fBound) bBoundary = true;
                }
            }
        }

        let nCeiling = Math.floor(nScreenHeight / 2 - nScreenHeight / fDistanceToWall);
        let nFloor = nScreenHeight - nCeiling;

        for (let y = 0; y < nScreenHeight; y++) {
            if (y < nCeiling)
                screen[y * nScreenWidth + x] = ' ';
            else if (y > nCeiling && y <= nFloor) {
                let nShade = ' ';
                if (fDistanceToWall <= fDepth / 4)
                    nShade = '█';
                else if (fDistanceToWall < fDepth / 3)
                    nShade = '▓';
                else if (fDistanceToWall < fDepth / 2)
                    nShade = '▒';
                else if (fDistanceToWall < fDepth)
                    nShade = '░';
                else
                    nShade = ' ';
                if (bBoundary) nShade = ' ';
                screen[y * nScreenWidth + x] = nShade;
            } else {
                let nShade = ' ';
                let b = 1 - (y - nScreenHeight / 2) / (nScreenHeight / 2);
                if (b < 0.25)
                    nShade = '#';
                else if (b < 0.5)
                    nShade = 'x';
                else if (b < 0.75)
                    nShade = '.';
                else if (b < 0.9)
                    nShade = '-';
                else			
                    nShade = ' ';
                screen[y * nScreenWidth + x] = nShade;
            }
        }
    }

    util_replaceSection(screen, 0, 
        `X=${fPlayerX.toFixed(2)}, Y=${fPlayerY.toFixed(2)}, A=${fPlayerA.toFixed(2)}, FPS=${(1 / fElapsedTime).toFixed(2)}`);

    for (let nx = 0; nx < nMapWidth; nx++)
        for (let ny = 0; ny < nMapWidth; ny++)
            screen[(ny + 1) * nScreenWidth + nx] = map[ny * nMapWidth + nx];

    screen[(Math.floor(fPlayerY) + 1) * nScreenWidth + Math.floor(fPlayerX)] = 'P';

    util_displayScreenBuffer(screen, nScreenWidth, nScreenHeight);

    requestAnimationFrame(gameLoop); 
}
requestAnimationFrame(gameLoop);
