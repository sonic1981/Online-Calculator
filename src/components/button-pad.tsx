import React, { ReactNode, useMemo } from "react";
import { symbols } from "../constants";
import { Button } from "./button";


export interface ButtonPadProps {
  addValue: (val: string) => void
}

export const ButtonPad : React.FC<ButtonPadProps> = ({addValue}) => {


  const generateNumbers: ReactNode[] = [];
  for(let x = 9; x >= 0; x--){
    generateNumbers.push(<Button key={`button_${x}`} text={x.toString()} buttonPress={() => addValue(x.toString())}/>);
  }


  const generateSymbols = symbols
    .map(m => <Button key={`button_${m}`} text={m} buttonPress={() => addValue(m)}/>);

  return <div className="flex flex-row">
    <div className="flex flex-wrap justify-center border-2 border-white flex-auto">
      {generateNumbers}
    </div>
    <div className="flex-1 flex flex-col">
      {generateSymbols}
    </div>
  </div>
 
}