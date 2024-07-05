import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { InputText } from '../index'; //
import '@testing-library/jest-dom';

describe('InputText Component', () => {
  test('renders correctly', () => {
    render(<InputText value="" />);
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
  });

  test('displays the value', () => {
    render(<InputText value="Test Value" />);
    expect(screen.getByDisplayValue(/test value/i)).toBeInTheDocument();
  });

  test('calls onChange when input changes', () => {
    const handleChange = jest.fn();
    render(<InputText value="" onChange={handleChange} />);
    const input = screen.getByLabelText(/name/i);
    fireEvent.change(input, { target: { value: 'New Value' } });
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  test('displays an error message when error prop is present', () => {
    const errorMessage = 'Error message';
    render(<InputText value="" error={errorMessage} />);
    expect(screen.getByText(errorMessage)).toBeInTheDocument();
    expect(screen.getByText(errorMessage)).toHaveStyle(
      'color: rgb(211, 47, 47)'
    );
  });
});
