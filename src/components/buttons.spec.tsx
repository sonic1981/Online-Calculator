import { render, screen } from "@testing-library/react"
import { Button } from "./button"
import React from "react";

describe('Button', () => {
    test('render button', () => {
        render(<Button text="On" buttonPress={() => { }}></Button>);

        const button = screen.getByRole('button', { name: 'On' });
        expect(button).toBeDefined();
        expect(button.className).toEqual('basis-1/3 grow-0 shrink border-2 border-white py-5 hover:bg-ee-blue hover:text-white');
    });

    test('button press', () => {

        let buttonVal = '';

        render(<Button text="On" buttonPress={(val) => { buttonVal = val; }}></Button>);

        const button = screen.getByRole('button', { name: 'On' });
        expect(button).toBeDefined();
        button.click();

        expect(buttonVal).toEqual("On");
    });

    test('override className', () => {
        render(<Button text="On" buttonPress={() => { }} className="override"></Button>);

        const button = screen.getByRole('button', { name: 'On' });
        expect(button).toBeDefined();
        expect(button.className).toEqual('override');

    });
})