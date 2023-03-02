import { render, screen } from "@testing-library/react"
import { Screen } from "./screen";
import React from "react";

describe('Screen', () => {
  test('Loads blank', () => {
    render(<Screen buttonsPressed={[]}></Screen>);

    const myScreen = screen.getByRole('screen');
    expect(myScreen).toBeDefined();


  });

  test('displays text', () => {
    render(<Screen buttonsPressed={[..."Lorem ipsum dolor sit amet, consectetur adipiscing"]}></Screen>);

    const myScreen = screen.getByText("Lorem ipsum dolor sit amet, consectetur adipiscing");
    expect(myScreen).toBeDefined();

  });

  test('18+', () => {
    render(<Screen buttonsPressed={["1","8","+"]}></Screen>);

    const myScreen = screen.getByText("18 +");
    expect(myScreen).toBeDefined();

  });

  test('18+1', () => {
    render(<Screen buttonsPressed={["1","8","+","1"]}></Screen>);

    const myScreen = screen.getByText("18 + 1");
    expect(myScreen).toBeDefined();

  });
})