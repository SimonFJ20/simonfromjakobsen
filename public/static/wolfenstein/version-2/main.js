
//
//  Wolfenstein like rendering program
//  Version 2.0
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
//      https://www.simonfj20.site/
//      https://www.github.com/SimonFJ20/
//
//  Inspirations:
//      https://www.youtube.com/watch?v=xW8skO7MFYw
//

const screenWidth = 120;
const screenHeight = 40;

let playerX = 8;
let playerY = 8;
let playerAngle = 0;

const mapWidth = 16;
const mapHeight = 16;

const FOV = Math.PI / 4;
const depth = 16;

// const screen = util_getNewEmptyScreenBuffer(nScreenWidth, nScreenHeight);
const screen = [];

let mapString = '';
mapString += '################';
mapString += '#              #';
mapString += '#        ##    #';
mapString += '#    #         #';
mapString += '#        #     #';
mapString += '#              #';
mapString += '#   #          #';
mapString += '#              #';
mapString += '#         #    #';
mapString += '# #       #    #';
mapString += '# #       #    #';
mapString += '# #       #    #';
mapString += '# #            #';
mapString += '# ####         #';
mapString += '#              #';
mapString += '################';

// from string to char array
let map = [];
for (let i = 0; i < mapString.length; i++)
    map[i] = mapString.charAt(i);

let before = Date.now() / 1000;
let now = 0;

// dom friendly "recursive" loop equivalent to while (true)
const gameLoop = () => {

    now = Date.now() / 1000;
    let timeDelta = now - before;
    before = now;

    if (util_keyIsPressed('a'))
        playerAngle += 1 * timeDelta;

    if (util_keyIsPressed('d'))
        playerAngle -= 1 * timeDelta;

    if (util_keyIsPressed('w')) {
        // move player along playerAngle vector
        playerX += Math.sin(playerAngle) * 3 * timeDelta;
        playerY += Math.cos(playerAngle) * 3 * timeDelta;

        // move back if hit a wall
        if(map[Math.floor(playerY) * mapWidth + Math.floor(playerX)] === '#') {
            playerX -= Math.sin(playerAngle) * 3 * timeDelta;
            playerY -= Math.cos(playerAngle) * 3 * timeDelta
        }
    }
    
    if (util_keyIsPressed('s')) {
        playerX -= Math.sin(playerAngle) * 3 * timeDelta;
        playerY -= Math.cos(playerAngle) * 3 * timeDelta;

        if(map[Math.floor(playerY) * mapWidth + Math.floor(playerX)] === '#') {
            playerX += Math.sin(playerAngle) * 3 * timeDelta;
            playerY += Math.cos(playerAngle) * 3 * timeDelta
        }
    }

    for (let x = 0; x < screenWidth; x++) {
        let rayAngle = (playerAngle - FOV / 2) + ((screenWidth - x) / screenWidth) * FOV;

        let distanceToWall = 0;
        let hasHitWall = false;
        let isBoundary = false;

        // get unit vector of ray angle
        let eyeX = Math.sin(rayAngle);
        let eyeY = Math.cos(rayAngle);

        while (!hasHitWall && distanceToWall < depth) {
            distanceToWall += 0.1;

            // these should be integers, because they represent a point on the map
            let testX = Math.floor(playerX + eyeX * distanceToWall);
            let testY = Math.floor(playerY + eyeY * distanceToWall);

            if (testX < 0 || testX >= mapWidth || testY < 0 || testY >= mapHeight) {
                // if ray hasn't hit anything and reach the max length
                hasHitWall = true;
                distanceToWall = depth;
            } else if (map[testY * mapWidth + testX] === '#') {
                hasHitWall = true;
                // ray has hit a wall/box
                
                // now we calculate if we the ray hit or was close to
                // hitting a box boundary
                const boundaries = [];
                
                // find all boundries of the box
                for (let tx = 0; tx < 2; tx++) {
                    for (let ty = 0; ty < 2; ty++) {
                        // get vector of player to boundary
                        let vx = testX + tx - playerX;
                        let vy = testY + ty - playerY;

                        let distance = Math.sqrt(vx * vx + vy * vy);
                        let dotProduct = (eyeX * vx / distance) + (eyeY * vy / distance);
                        boundaries.push({first: distance, second: dotProduct});
                    }
                }

                // selection sort
                for (let i = 0; i < boundaries.length - 1; i++) {
                    let jMin = i;
                    for (let j = i + 1; j < boundaries.length; j++) 
                        if (boundaries[j].first < boundaries[jMin].first)
                            jMin = j;
                    if (jMin != 1) {
                        let temp = boundaries[i];
                        boundaries[i] = boundaries[jMin];
                        boundaries[jMin] = temp;
                    }
                }

                // set tolerance for hitting a boundary
                let boundTolerance = 0.01;

                // check first the two closes boundaries
                if (Math.acos(boundaries[0].second) < boundTolerance) isBoundary = true;
                if (Math.acos(boundaries[1].second) < boundTolerance) isBoundary = true;
            }
        }

        let ceiling = Math.floor(screenHeight / 2 - screenHeight / distanceToWall);
        let floor = screenHeight - ceiling;

        for (let y = 0; y < screenHeight; y++) {
            if (y < ceiling) {
                // no roof
                screen[y * screenWidth + x] = ' ';
            } else if (y > ceiling && y <= floor) {
                // if wall find a suitable shade depending on distance
                let nShade = ' ';
                if (distanceToWall <= depth / 4)
                    nShade = '█';
                else if (distanceToWall < depth / 3)
                    nShade = '▓';
                else if (distanceToWall < depth / 2)
                    nShade = '▒';
                else if (distanceToWall < depth)
                    nShade = '░';
                if (isBoundary) nShade = ' ';
                screen[y * screenWidth + x] = nShade;
            } else {
                // if floor shade depending on how close we are to 
                // the bottom of the screen, creating a cheap distance illusion
                let nShade = ' ';
                let b = 1 - (y - screenHeight / 2) / (screenHeight / 2);
                if (b < 0.25)
                    nShade = '#';
                else if (b < 0.5)
                    nShade = 'x';
                else if (b < 0.75)
                    nShade = '.';
                else if (b < 0.9)
                    nShade = '-';
                screen[y * screenWidth + x] = nShade;
            }
        }
    }

    // diplay playerX, -Y, -Angle and FPS
    util_replaceSection(screen, 0, 
        `X=${playerX.toFixed(2)}, Y=${playerY.toFixed(2)}, A=${playerAngle.toFixed(2)}, FPS=${(1 / timeDelta).toFixed(2)}`);

    // display minimap
    for (let nx = 0; nx < mapWidth; nx++)
        for (let ny = 0; ny < mapWidth; ny++)
            screen[(ny + 1) * screenWidth + nx] = map[ny * mapWidth + nx];

    
    // get arrow matching player angle
    //let arrows = '↓↘→↗↑↖←↙';
    //let arrowDirection = arrows.length * Math.abs(playerAngle % (2 * Math.PI) / (2 * Math.PI))
    //let playerArrow = arrows.charAt(arrowDirection);
    // display arrow as player
    //screen[(Math.floor(playerY) + 1) * screenWidth + Math.floor(playerX)] = playerArrow;
    
    // using html and css we can rotate the arrow character
    // this was inspired by Theis Pieter - https://tphollebeek.netlify.com/
    let playerArrowHtml = `<span style="display: inline-block; transform: rotateZ(${-playerAngle}rad);">↓</span>`;

    // set playerposition to the arrow html
    screen[(Math.floor(playerY) + 1) * screenWidth + Math.floor(playerX)] = playerArrowHtml;

    util_displayScreenBuffer(screen, screenWidth, screenHeight);

    requestAnimationFrame(gameLoop); 
}
requestAnimationFrame(gameLoop);
