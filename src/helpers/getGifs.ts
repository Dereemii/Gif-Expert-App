import { Gifs } from "../types/interface";

export const getGifts = async (category: string) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=y7LYXMsAJgPSae078dsArJ5Cujl0a7r4&q=${category}&limit=20`;
  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifs: object = data.map((img: Gifs) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }));

  return gifs;
};
