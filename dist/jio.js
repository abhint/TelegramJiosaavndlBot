"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jioSongDownload = exports.songSearch = void 0;
const defaultLimit = 10;
function songSearch(songname) {
    return `https://www.jiosaavn.com/api.php?__call=search.getResults&_format=json&p=1&_marker=0&ctx=android&q=${songname}`;
}
exports.songSearch = songSearch;
;
function jioSongDownload(dlLink) {
    return dlLink
        .replace("preview.saavncdn.com", "jiosaavn.cdn.jio.com")
        .replace("_96_p", "_320")
        .replace(".mp4", ".mp3");
}
exports.jioSongDownload = jioSongDownload;
