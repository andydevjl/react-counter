import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CounterRight from './CounterRight/CounterRight';
import CounterLeft from './CounterLeft/CounterLeft';

it('Should render the plus button', () => {
    const {queryAllByTestId} = render(<CounterRight />, <CounterLeft />)

    expect(queryAllByTestId('plus')).toBeTruthy();
})

it('Should render the minus button', () => {
    const {queryAllByTestId} = render(<CounterRight />, <CounterLeft />)
    
    expect(queryAllByTestId('minus')).toBeTruthy()
})

it('Should render the reset button', () => {
    const {queryAllByTestId} = render(<CounterRight />, <CounterLeft />)

    expect(queryAllByTestId('reset')).toBeTruthy();
})