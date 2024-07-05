import React from 'react';
import { render, screen } from '@testing-library/react';
import { Loading } from '..';
import '@testing-library/jest-dom';

describe('Loading', () => {
  test('renders CircularProgress within a Box component', () => {
    render(<Loading />);

    // Check if the Box component is rendered
    const boxComponent = screen.getByTestId('loading-box');
    expect(boxComponent).toBeInTheDocument();

    // Check if the CircularProgress component is rendered within the Box component
    const circularProgressElement = screen.getByTestId('loading-circular-progress');
    expect(circularProgressElement).toBeInTheDocument();
  });
});
