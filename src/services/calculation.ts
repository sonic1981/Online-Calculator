import { symbols } from "../constants";

const performCalculation = (num1: number, operator: string, num2: number) => {
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num1 / num2;
    default:
      throw new Error(`Unrecognised symbol ${operator}`);
  }
}

const combineNumbers = (buttonsPressed: string[]): Array<string | number> => {

  const returnVal: Array<string | number> = [];

  let numberString = '';
  for (let x = 0; x < buttonsPressed.length; x++) {

    const b = buttonsPressed[x];

    if (/\d/.test(b)) {

      numberString += b;

    } else {

      if (numberString.length > 0) {

        returnVal.push(parseInt(numberString));
        numberString = '';

      }

      returnVal.push(b);

    }

  }

  if (numberString !== '') {
    returnVal.push(parseInt(numberString));
  }

  return returnVal;

}

export const Calculation = (buttonsPressed: string[]): number => {

  const combinedVals = combineNumbers(buttonsPressed);
  let index = 0;

  for (const sym of symbols.filter(f => f !== "=")) {

    index = 0;

    while (index >= 0) {
      index = combinedVals.findIndex((element) => element === sym);

      if (index >= 0) {
        const newVal = performCalculation(<number>combinedVals[index - 1], <string>combinedVals[index], <number>combinedVals[index + 1]);

        combinedVals.splice(index - 1, 3, newVal);
      }
    }
  }

  return <number>combinedVals[0];
}