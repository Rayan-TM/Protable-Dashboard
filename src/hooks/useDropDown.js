import React, { useEffect, useState } from "react";

export default function useDropDown(element) {
  const [isBoxOpen, setIsBoxOpen] = useState(false);

  useEffect(() => {
    const closeDropDown = (e) => {
      if (!element.current.contains(e.target)) {
        setIsBoxOpen(false);
      }
    };
    document.body.addEventListener("click", closeDropDown);
    return () => {
      document.body.removeEventListener("click", closeDropDown);
    };
  }, []);

  return [isBoxOpen, setIsBoxOpen]
}
