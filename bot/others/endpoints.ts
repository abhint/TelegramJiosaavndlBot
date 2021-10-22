export function songSearch(songname: string): string {
  return `https://www.jiosaavn.com/api.php?__call=search.getResults&_format=json&p=1&_marker=0&ctx=android&q=${songname}`;
}

export function jioSongDownload(preview_url: string) {
  return preview_url
    .replace("preview.saavncdn.com", "jiosaavn.cdn.jio.com")
    .replace("_96_p", "_320")
    .replace(".mp4", ".mp3");
}
