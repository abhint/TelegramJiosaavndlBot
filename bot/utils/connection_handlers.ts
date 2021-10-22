import axios from "axios";
import { songSearch, jioSongDownload } from "../others/endpoints";

// interface songs {
//   id: string;
//   song: string;
//   media_preview_url: string;
//   duration: string;
// }

export async function get_result(query: string) {
  let url = songSearch(query);
  let response = await (await axios.get(url)).data;
  return sortAPI(response.results);
}

async function sortAPI(result: any) {

  let songs_details: Array<object> = [];
  for (let get in result) {
    songs_details.push({
      type: "audio",
      id: result[get].id,
      audio_url: result[get].media_preview_url,
      title: result[get].song,
      parse_mode: "html",
      audio_duration: Number(result[get].duration),
      caption: `<b>Name: ${result[get].song}\nYear: ${result[get].year}\nLanguage: ${result[get].language}</b>`,
    });
  }
  console.log(songs_details);
  return songs_details;
}
