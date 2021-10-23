import axios from "axios";
import { songSearch } from "../others/endpoints";
import { v4 as uuidv4 } from "uuid";

export async function get_result(query: string) {
  let url = songSearch(query);
  let response = (await axios.get(url)).data;
  let response_results = response.results;
  let results = response_results
    // @ts-ignore
    .map(({ media_preview_url, song, duration, year, language }) => ({
      type: "audio",
      id: uuidv4(),
      audio_url: media_preview_url,
      title: song,
      audio_duration: Number(duration),
      parse_mode: "html",
      caption: `<b>Name: ${song}\nYear: ${year}\nLanguage: ${language}</b>`,
    }));

  return results;
}
