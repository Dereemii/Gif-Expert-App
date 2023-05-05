import { FormEvent, useState } from "react";

type Props = {
  setCategories: React.Dispatch<React.SetStateAction<string[]>>;
  onNewCategory: (newCategory: string) => void;
};

export const AddCategory: React.FC<Props> = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("hello kitty");

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (inputValue.trim().length <= 1) return;

    onNewCategory(inputValue.trim());
    setInputValue("");
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="buscar gifs"
        value={inputValue}
        onChange={(event) => onInputChange(event)}
      />
    </form>
  );
};
