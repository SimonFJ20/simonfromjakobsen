
//
//  Wolfenstein like rendering program
//  Version 2.0
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

/** @param {number} width @param {number} height @returns {string[]} */
const util_getNewEmptyScreenBuffer = (width, height) => {
    const buffer = [];
    for (let i = 0; i < width * height; i++) 
        buffer[i] = ' ';
    return buffer;
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
