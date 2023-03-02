import { render, screen } from "@testing-library/react"
import React from "react";
import { ButtonPad } from "./button-pad";

describe('ButtonPad', () => {

  test('Renders numbers 0-9', () => {

    render(<ButtonPad addValue={() => {}}></ButtonPad>);

    for(let x =0; x++; x<=9){
      const btn = screen.getByRole('button', {name: x.toString()});

      expect(btn).toBeDefined();
    }
  });

  test('Press numbers 0-9', () => {

    const results: string[] = [];

    render(<ButtonPad addValue={(val) => {results.push(val)}}></ButtonPad>);

    for(let x =0; x++; x<=9){
      const btn = screen.getByRole('button', {name: x.toString()}).click();

      expect(results).toEqual(["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"])
    }
  });
});