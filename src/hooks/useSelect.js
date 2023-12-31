import React, {useState} from "react";

export default function useSelect(initialValue) {
  const [title, setTitle] = useState(initialValue);

  const selectHandler = (title) => {
    setTitle(title);
  };

  return [title, selectHandler]
}
