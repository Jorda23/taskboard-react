import React from 'react';
import { render, screen } from '@testing-library/react';
import Layout from '../'; 
import '@testing-library/jest-dom';

describe('Layout', () => {
  test('renders children within a Box component', () => {
    // Mock child component
    const MockChild = () => <div data-testid="mock-child">Mock Child</div>;

    // Render the Layout component with the MockChild as children
    render(<Layout><MockChild /></Layout>);

    // Check if the Box component is rendered
    const boxComponent = screen.getByTestId('layout-box');
    expect(boxComponent).toBeInTheDocument();

    // Check if the children are rendered within the Box component
    const mockChildElement = screen.getByTestId('mock-child');
    expect(mockChildElement).toBeInTheDocument();
  });
});
