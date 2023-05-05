import React, { useState } from 'react';
import { Button } from './components/button';
import { ButtonPad } from './components/button-pad';
import { Screen } from './components/screen';
import { symbols } from './constants';
import { Calculation } from './services/calculation';


export const App: React.FC = () => {

  const [buttonsPressed, setButtonsPressed] = useState<string[]>([]);
  const [lastButton, setLastButton] = useState('');



  if (lastButton === "=") {
    setLastButton('');

    const newButtonsPressed = [...buttonsPressed];
    //take off the =
    newButtonsPressed.pop()!;
    const calculatedVal = Calculation(newButtonsPressed);

    setButtonsPressed([calculatedVal.toString()]);

  }

  const clear = () => {
    setButtonsPressed([]);
    setLastButton('');
  }

  return <div className='w-96 bg-white-smoke border-2 flex flex-col'>
    <Screen buttonsPressed={buttonsPressed}></Screen>
    <div className="bg-ee-blue p-5" />
    <Button text="C" buttonPress={() => clear()} className="flex-auto border-2 border-white py-5 hover:bg-ee-blue hover:text-white"></Button>
    <ButtonPad addValue={(val) => {
      setButtonsPressed([...buttonsPressed, val]);
      setLastButton(val);
    }}></ButtonPad>
  </div>
};