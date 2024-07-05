import React from 'react';
import { render, screen } from '@testing-library/react';
import { EmptyTaskMessage } from '..'; 
import '@testing-library/jest-dom';

describe('EmptyTaskMessage', () => {
  test('renders empty task message correctly', () => {
    render(<EmptyTaskMessage />);

    // Check if the Dropbox icon is rendered
    const dropboxIcon = screen.getByTestId('dropbox-icon');
    expect(dropboxIcon).toBeInTheDocument();

    // Check if the Typography component with variant "h6" is rendered
    const typographyElement = screen.getByRole('heading', { level: 6 });
    expect(typographyElement).toBeInTheDocument();
    expect(typographyElement).toHaveTextContent('There are no tasks yet');
  });
});
