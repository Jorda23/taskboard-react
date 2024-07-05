import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { CustomButton } from '../index'; // Make sure to have the correct path

describe('CustomButton', () => {
  test('renders the provided label', () => {
    const label = 'Add';
    render(<CustomButton label={label} />);

    const button = screen.getByText(label);

    expect(button).toBeInTheDocument();
  });

  test('renders the type success', () => {
    const { getByText } = render(<CustomButton label="Success" type="success" />);
    const button = getByText('Success');

    expect(button).toBeInTheDocument();
  }); 

  test('renders the type danger', () => {
    const { getByText } = render(<CustomButton label="Danger" type="danger" />);
    const button = getByText('Danger');

    expect(button).toBeInTheDocument();
  }); 

  test('renders disabled button', () => {
    render(<CustomButton label="Add" disabled />);

    const button = screen.getByRole('button');

    // Verify that the button has been rendered with the disabled button style
    expect(button).toHaveStyle(`
        cursor: not-allowed;
    `);

    // Verify that the button is disabled
    expect(button).toBeDisabled();
  });
});
