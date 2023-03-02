import React from "react";

export interface ScreenProps {
  buttonsPressed: string[]
}

export const Screen: React.FC<ScreenProps> = ({buttonsPressed}) => {
  
  let text = '';
  let lastButtonType: 'number' | 'operator' = 'number';
  for(let button of buttonsPressed){
    const thisButtonType = /\d/.test(button) ? 'number' : 'operator';

    if (lastButtonType !== thisButtonType) {
      text += ` ${button}`;
    } else {
      text += button;
    }

    lastButtonType = thisButtonType;
  }

  return <div className="font-orbitron h-16 bg-screen m-3 p-3 flex flex-row-reverse text-3xl items-center" role="screen">{text}</div>;
}