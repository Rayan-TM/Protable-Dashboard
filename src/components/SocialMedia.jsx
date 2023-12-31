import React from "react";

export default function SocialMedia({ children }) {
  return (
    <div>
      <hr className="my-8 border-gray-300" />
      <small className="font-medium text-gray-300 ">
        با حساب شبکه اجتماعی خود وارد شوید.
      </small>
      <div className="flex justify-center mt-4 gap-x-3">
        {children.map((child, index) => (
          <div
            key={index}
            style={{
              backgroundColor: [
                "#3B5998",
                "#55ACEE",
                "#EA4C89",
                "#0077B5",
                "#DB4437",
                "#1769FF",
                "#3F729B",
              ][index],
            }}
            className="w-9 h-9 rounded-full hover:brightness-75 transition-all duration-300"
          >
            <a
              className="w-full h-full flex justify-center items-center"
              href=""
            >
              {child}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
