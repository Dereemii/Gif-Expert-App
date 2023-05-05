import { GifItem } from "./GifItem";
import { GifGridProps } from "../types/GifGridProps";
import { useFetchGifs } from "../hooks/useFetchGifs";

type Props = {
  category: string;
};

export const GifGrid: React.FC<Props> = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>
      {isLoading && <p>Cargando...</p>}

      <div className="card-grid">
        {images.map((image: GifGridProps) => (
          <GifItem key={image.id} {...image} />
        ))}
      </div>
    </>
  );
};
