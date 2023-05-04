import { useEffect, useState } from "react";
import { getGifts } from "../helpers/getGifs";
import { GifItem } from "./GifItem";
import { GifGridProps } from "../types/GifGridProps";

type Props = {
  category: string;
};

export const GifGrid: React.FC<Props> = ({ category }) => {
  const [images, setImages] = useState([]);

  const getImages = async () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const newImages: any = await getGifts(category);
    setImages(newImages);
  };

  useEffect(() => {
    getImages();
  }, []);

  return (
    <>
      <h3>{category}</h3>

      <div className="card-grid">
        {images.map((image: GifGridProps) => (
          <GifItem key={image.id} {...image} />
        ))}
      </div>
    </>
  );
};
