import axios from 'axios';
import { songSearch, jioSongDownload } from '../api/jio_api';



const response = async (q: string) => {
    let result: Array<object> = []
    try {
        let r = await axios.get(songSearch(q))
        let j = await r.data
        let s = j.results
        if (s === undefined) { }
        for (let get in s) {
            result.push(
                {
                    type: 'audio',
                    id: s[get].id,
                    audio_url: jioSongDownload(s[get].media_preview_url),
                    title: s[get].song - s[get].language,
                    parse_mode: `html`,
                    audio_duration: s[get].duration,
                    caption: `<b>Name: ${s[get].song}\nYear: ${s[get].year}\nLanguage: ${s[get].language}</b>`,
                }
            )
        }
        return result
    } catch (error) {
        console.log(error);
        return
    }
};

export default response;