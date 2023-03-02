import React from "react";

export interface ButtonProps {
  text: string
  buttonPress: (val: string) => void,
  className?: string
}

export const Button: React.FC<ButtonProps> = ({ text, buttonPress, className }) => {

  let classStr = "basis-1/3 grow-0 shrink border-2 border-white py-5 hover:bg-ee-blue hover:text-white";
  if (className) {
    classStr = className;
  }

  return <button role="button" value={text} className={classStr}
    onClick={() => buttonPress(text)}>{text}</button>;
}