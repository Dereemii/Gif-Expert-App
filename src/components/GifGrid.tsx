import { useEffect } from "react";
import { getGifts } from "../helpers/getGifs";

type Props = {
  category: string;
};

export const GifGrid: React.FC<Props> = ({ category }) => {
  
  useEffect(() => {
    getGifts(category);
  }, []);

  return (
    <>
      <h3>{category}</h3>
      <p>Hola mundo</p>
    </>
  );
};
