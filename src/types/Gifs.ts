export interface Gifs {
  id: string;
  title: string;
  images: Images;
}

interface Images {
  downsized_medium: Url
}

interface Url {
  url: string
}