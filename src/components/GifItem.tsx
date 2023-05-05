import { GifGridProps } from "../types/GifGridProps";

export const GifItem = ({ title, url }: GifGridProps) => {

  return (
    <div className="card">
      <img src={url} alt={title} />
      <p> {title}</p>
    </div>
  );
};
