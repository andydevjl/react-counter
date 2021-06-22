import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Header from './Header';

it('Should render LEFT title', () => {
    const {queryByTestId} = render(<Header />)

    expect(queryByTestId('left')).toBeTruthy();
})

it('Should render RIGHT title', () => {
    const {queryByTestId} = render(<Header />)

    expect(queryByTestId('right')).toBeTruthy();
})