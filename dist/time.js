"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function minutesC(seconds) {
    let minutes = Math.floor(seconds / 60);
    let second = Math.floor(seconds % 60);
    return `${minutes}:${second}`;
}
exports.default = minutesC;
