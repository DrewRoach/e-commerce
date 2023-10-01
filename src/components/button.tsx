import React from "react";

interface button {
  text: string;
  width: number;
  height: number;
  onClick?(): void;
}
export const Button = (buttonProps: button) => {
  const { text, width, height, onClick } = buttonProps;
  return (
    <>
      <button onClick={onClick} style={{ width: width, height: height }}>
        {text}
      </button>
    </>
  );
};
