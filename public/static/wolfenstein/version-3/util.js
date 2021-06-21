
//
//  Wolfenstein like rendering program
//  Version 3.0
//
//  File:   util.js
//      Utilityes for things like dom interaction to be abstracted away
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


let canvas;
let graphics;

/** @param {number} width @param {number} height */
const util_initCanvas = (width, height) => {
    canvas = document.getElementById('target');
    graphics = canvas.getContext('2d');
    util_clearCanvas(width, height);
}

const util_clearCanvas = (width, height) => {
    graphics.fillStyle = 'rgb(0, 0, 0)';
    graphics.fillRect(0, 0, width * 2, height * 2);
}

const util_setPixel = (x, y, red, green, blue) => {
    graphics.fillStyle = `rgb(${red}, ${green}, ${blue})`;
    graphics.fillRect(x * 2, y * 2, 2, 2);
}

const util_setRect = (x, y, width, height, red, green, blue) => {
    graphics.fillStyle = `rgb(${red}, ${green}, ${blue})`;
    graphics.fillRect(x * 2, y * 2, width, height);
}

const util_displayText = (x, y, text) => {
    graphics.fillStyle = 'rgb(255, 255, 255)';
    graphics.font = '16px consolas';
    graphics.fillText(text, x * 2, 16 + y * 2);
}

const util_displayMap = (ax, ay, width, height, map) => {
    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            if(map[y * width + x] === '#') 
                graphics.fillStyle = 'rgb(0, 255, 0)';
            else
                graphics.fillStyle = 'rgb(100, 100, 100)';
            graphics.fillRect(ax * 2 + x * 8, ay * 2 + y * 8, 8, 8);
        }
    }
}

const keyState = {}; // object used as dictionary
// toLowerCase because else would 'a' and 'A' be different
// e.keyCode could be used for this, but it's deprecated
document.body.addEventListener('keydown', (e) => keyState[e.key.toLowerCase()] = true);
document.body.addEventListener('keyup', (e) => keyState[e.key.toLowerCase()] = false);

/** @param {string} key @returns {boolean} */
const util_keyIsPressed = (key) => keyState[key] || false;

/** @returns {{first: number, second: number}[]} */
const util_getNumberPairArray = () => [];

/** @param {string[]} screenBuffer @param {number} start @param {string} newSection */
const util_replaceSection = (screenBuffer, start, newSection) => {
    for (let i = start; i < newSection.length; i++) screenBuffer[i] = newSection.charAt(i);
}

/** @param {string[]} screenBuffer @param {number} width @param {number} height */
const util_displayScreenBuffer = (screenBuffer, width, height) => {
    let out = '';
    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            out += screenBuffer[y * width + x];
        }
        out += '<br>'
    }
    document.getElementById('target').innerHTML = out;
}
