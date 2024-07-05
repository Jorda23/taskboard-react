import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Navbar from '..';
import '@testing-library/jest-dom';
import { useNavigate } from 'react-router-dom';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}));

describe('Navbar', () => {
  test('renders the title and a CustomButton', () => {
    const title = 'Test Title';
    const mockNavigate = jest.fn();
    (useNavigate as jest.Mock).mockReturnValue(mockNavigate);

    render(<Navbar title={title} />);

    // Check if the title is rendered
    const titleElement = screen.getByText(title);
    expect(titleElement).toBeInTheDocument();

    // Check if the CustomButton is rendered
    const customButtonElement = screen.getByRole('button', { name: 'Back' });
    expect(customButtonElement).toBeInTheDocument();
  });

  test('calls navigate function on button click', () => {
    const title = 'Test Title';
    const mockNavigate = jest.fn();
    (useNavigate as jest.Mock).mockReturnValue(mockNavigate);

    render(<Navbar title={title} />);

    // Click the CustomButton
    fireEvent.click(screen.getByRole('button', { name: 'Back' }));

    // Check if the navigate function is called with the correct argument
    expect(mockNavigate).toHaveBeenCalledWith('/home');
  });
});
