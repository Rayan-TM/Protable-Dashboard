import React from "react";
import { Star } from "./icons";

export default function Stars({ size, onStarsNumber }) {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <Star
            size={size}
            key={index}
            color={index <= onStarsNumber ? "#fc3" : "#BABABA"}
          />
        );
      })}
    </div>
  );
}
