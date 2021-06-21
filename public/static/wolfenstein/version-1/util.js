
//
//  Wolfenstein like rendering program
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

/** @returns {number} */
const util_getCurrentTimeInSeconds = () => Date.now() / 1000;


const keyState = {}; // object used as dictionary
// toLowerCase because else would 'a' and 'A' be different
// e.keyCode could be used for this, but it's deprecated
document.body.addEventListener('keydown', (e) => keyState[e.key.toLowerCase()] = true);
document.body.addEventListener('keyup', (e) => keyState[e.key.toLowerCase()] = false);

/** @param {string} key @returns {boolean} */
const util_keyIsPressed = (key) => keyState[key] || false;

/** @returns {{first: number, second: number}[]} */
const util_getNumberPairArray = () => [];

/** @param {{first: number, second: number}[]} numberPairArray */
const util_emulatedSortFunctionThatRequiresAnExplanation = (numberPairArray) => {

    // so the code i am trying to emulate is this line from the cpp tutorial:
    // 
    // sort(p.begin(), p.end(), [](const std::pair<float, float>& left, const std::pair<float, float>& right)
    //     { return left.first < right.first; }
    //     );
    //
    // take a look in the Main.cpp yourself if you want (and if i remembered to include it)
    //
    // what i think it does is take the first and last float pairs from the vector
    // then if the first float of begin/left is smaller than the first float of end/right then
    // it will swap the two float pairs in the vector
    //
    // i really think this section of the code could be done much better and cleaner
    // since it is only 2 pairs and 4 variables in total
    // then the messy sort() function could also be avoided
    // 
    // here is my attempt at emulating it, the way i think it works
    // this is ably to mutate the array (vector in cpp) because JS uses references

    const left = numberPairArray[0];
    const right = numberPairArray[1];
    if (left.first < right.first) {
        numberPairArray[0] = right;
        numberPairArray[1] = left;
    } else {
        numberPairArray[0] = left;
        numberPairArray[1] = right;
    }
}

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
