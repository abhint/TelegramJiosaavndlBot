"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const jio_1 = require("./jio");
const response = async (q) => {
    let result = [];
    try {
        let r = await axios_1.default.get(jio_1.songSearch(q));
        let j = await r.data;
        let s = j.results;
        if (s === undefined) { }
        for (let get in s) {
            console.log(s[get]);
            result.push({
                type: 'audio',
                id: s[get].id,
                audio_url: jio_1.jioSongDownload(s[get].media_preview_url),
                title: s[get].song,
                parse_mode: `html`,
                audio_duration: s[get].duration,
                caption: `<b>Name: ${s[get].song}\nYear: ${s[get].year}\nLanguage: ${s[get].language}</b>`,
                // performer: minutesC(Number(s[get].duration))
            });
        }
        console.log(result);
        return result;
    }
    catch (error) {
        console.log(error);
        return;
    }
};
exports.default = response;
// audio_duration: s[get].duration,
