import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { App } from './app'
import React from 'react';
import { UserEvent } from '@testing-library/user-event/dist/types/setup/setup';

const pressButton = async (char: string, user: UserEvent) => {
  const button1 = screen.getByRole('button', { name: char });
  expect(button1).toBeDefined();
  await user.click(button1);
}

describe('App', () => {

  test('App boots successfully', () => {
    render(<App></App>);
  });

  test('pressing a button adds it to the screen', async () => {
    const user = userEvent.setup()

    render(<App></App>);

    await pressButton('1', user);

    const tstScreen = screen.getByRole('screen');
    expect(tstScreen).toBeDefined();

    expect(tstScreen.textContent).toEqual("1");
  })

  test('pressing multiple buttons adds it to the screen', async () => {
    const user = userEvent.setup()

    render(<App></App>);

    await pressButton('1', user);

    await pressButton('2', user);

    const tstScreen = screen.getByRole('screen');
    expect(tstScreen).toBeDefined();

    expect(tstScreen.textContent).toEqual("12");
  })

  test('pressing an operator appears on the screen', async () => {
    const user = userEvent.setup()

    render(<App></App>);

    await pressButton('8', user);
    await pressButton('+', user);

    const tstScreen = screen.getByRole('screen');
    expect(tstScreen).toBeDefined();
    expect(tstScreen.textContent).toEqual("8 +");
  });

  test('1 + 2', async () => {
    const user = userEvent.setup()

    render(<App></App>);

    await pressButton('1', user);
    await pressButton('+', user);
    await pressButton('2', user);

    const tstScreen = screen.getByRole('screen');
    expect(tstScreen).toBeDefined();
    expect(tstScreen.textContent).toEqual("1 + 2");
  });

  test('1 + 2 +', async () => {
    const user = userEvent.setup()

    render(<App></App>);

    await pressButton('1', user);
    await pressButton('+', user);
    await pressButton('2', user);
    await pressButton('+', user);

    const tstScreen = screen.getByRole('screen');
    expect(tstScreen).toBeDefined();
    expect(tstScreen.textContent).toEqual("1 + 2 +");
  });

  test('1 + 2 =', async () => {
    const user = userEvent.setup()

    render(<App></App>);

    await pressButton('1', user);
    await pressButton('+', user);
    await pressButton('2', user);
    await pressButton('=', user);

    const tstScreen = screen.getByRole('screen');
    expect(tstScreen).toBeDefined();
    expect(tstScreen.textContent).toEqual("3");
  });

  test('1 + 2 + 2 = ', async () => {
    const user = userEvent.setup()

    render(<App></App>);

    await pressButton('1', user);
    await pressButton('+', user);
    await pressButton('2', user);
    await pressButton('+', user);
    await pressButton('2', user);
    await pressButton('=', user);

    const tstScreen = screen.getByRole('screen');
    expect(tstScreen).toBeDefined();
    expect(tstScreen.textContent).toEqual("5");
  });

  test('1 + 2 *', async () => {
    const user = userEvent.setup()

    render(<App></App>);

    await pressButton('1', user);
    await pressButton('+', user);
    await pressButton('2', user);
    await pressButton('*', user);


    const tstScreen = screen.getByRole('screen');
    expect(tstScreen).toBeDefined();
    expect(tstScreen.textContent).toEqual("1 + 2 *");
  });

  test('1 + 2 * 2 = ', async () => {
    const user = userEvent.setup()

    render(<App></App>);

    await pressButton('1', user);
    await pressButton('+', user);
    await pressButton('2', user);
    await pressButton('*', user);
    await pressButton('2', user);
    await pressButton('=', user);


    const tstScreen = screen.getByRole('screen');
    expect(tstScreen).toBeDefined();
    expect(tstScreen.textContent).toEqual("5");
  });

  test('1 + 2 = * 2 = ', async () => {
    const user = userEvent.setup()

    render(<App></App>);

    await pressButton('1', user);
    await pressButton('+', user);
    await pressButton('2', user);
    await pressButton('=', user);
    await pressButton('*', user);
    await pressButton('2', user);
    await pressButton('=', user);


    const tstScreen = screen.getByRole('screen');
    expect(tstScreen).toBeDefined();
    expect(tstScreen.textContent).toEqual("6");
  });

  test('100 * 20 / 2 - 1 = ', async () => {
    const user = userEvent.setup()

    render(<App></App>);

    await pressButton('1', user);
    await pressButton('0', user);
    await pressButton('0', user);
    await pressButton('*', user);
    await pressButton('2', user);
    await pressButton('0', user);
    await pressButton('/', user);
    await pressButton('2', user);
    await pressButton('-', user);
    await pressButton('1', user);
    await pressButton('=', user);


    const tstScreen = screen.getByRole('screen');
    expect(tstScreen).toBeDefined();
    expect(tstScreen.textContent).toEqual("999");
  });

  test('clear button', async () => {
    const user = userEvent.setup()

    render(<App></App>);

    await pressButton('1', user);
    await pressButton('C', user);
    await pressButton('2', user);
    await pressButton('+', user);
    await pressButton('1', user);
    await pressButton('=', user);

    const tstScreen = screen.getByRole('screen');
    expect(tstScreen).toBeDefined();
    expect(tstScreen.textContent).toEqual("3");
  })
})