// CustomIcoButton.test.tsx
import { cleanup, fireEvent, render, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';

import { CustomIcoButton, IconButtonType } from '../index';
import { ThemeProvider } from 'styled-components';

jest.mock('../../../shared/iconsTypes/icons', () => ({
  IconsTypes: [
    {
      type: 'IconAtom',
      icon: () => (
        <svg>
          <circle />
        </svg>
      ),
    },
  ],
}));

const theme = {
  colors: {
    blue: '#0000ff',
    darkBlue: '#00008b',
    red: '#ff0000',   
    darkRed: '#8b0000',
    grey: '#808080',
    darkGrey: '#505050'
  },
};


describe('CustomIcoButton', () => {
  afterEach(cleanup);

  const types = ['success', 'danger', 'default'];

  types.forEach(type => {
    test(`renders with correct styles for ${type} type`, () => {
      const { asFragment } = render(
        <ThemeProvider theme={theme}>
          <CustomIcoButton
            icon="IconAtom"
            type={type as IconButtonType}
            ariaLabel="IconButtonAction"
          />
        </ThemeProvider>
      );
      expect(asFragment()).toMatchSnapshot();
    });

    test(`click event is fired for ${type} type when the button is clicked`, () => {
      const handleClick = jest.fn();
      const { getByLabelText } = render(
        <ThemeProvider theme={theme}>
          <CustomIcoButton
            icon="IconAtom"
            type={type as IconButtonType}
            ariaLabel="IconButtonAction"
            onClick={handleClick}
          />
        </ThemeProvider>
      );

      const button = getByLabelText('IconButtonAction');
      fireEvent.click(button);
      expect(handleClick).toHaveBeenCalledTimes(1);
    });
  });
  
  test('click event is fired when the button is clicked', () => {
    const handleClick = jest.fn();
    const { getByLabelText } = render(
      <CustomIcoButton
        icon="IconAtom"
        type="success"
        ariaLabel="IconButtonAction"
        onClick={handleClick}
      />
    );

    const button = getByLabelText('IconButtonAction');
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('renders with correct styles', () => {
  
    const { asFragment } = render(
      <CustomIcoButton
        icon="IconAtom"
        type="success"
        ariaLabel="IconButtonAction"
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test('renders without optional props', () => {
    const { getByLabelText } = render(
      <CustomIcoButton
        icon="IconAtom"
        type="success"
        ariaLabel="IconButtonAction"
      />
    );

    const button = getByLabelText('IconButtonAction');
    expect(button).not.toBeDisabled(); 
  });

  test('renders correct icon based on prop', () => {
    const { getByLabelText } = render(
      <CustomIcoButton
        icon="IconAtom"
        type={'success'}
        ariaLabel={'IconButtonAction'}
      />
    );

    // Verify the specific icon is displayed
    const svgElement = getByLabelText('IconButtonAction').querySelector('svg');
    expect(svgElement).toBeInTheDocument();
  });

  test('dynamically changes styles when disabled', async () => {
    const { getByLabelText, rerender } = render(
      <CustomIcoButton
        icon="IconAtom"
        type={'success'}
        ariaLabel={'IconButtonAction'}
      />
    );

    rerender(
      <CustomIcoButton
        icon="IconAtom"
        type={'success'}
        disabled={true}
        ariaLabel={'IconButtonAction'}
      />
    );

    await waitFor(() => {
      const button = getByLabelText('IconButtonAction');
      // Check for the disabled attribute
      expect(button).toBeDisabled();
      // Optionally check for specific class related to disabled state
      expect(button).toHaveClass('Mui-disabled');
    });
  });
});
