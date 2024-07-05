import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { CustomAvatar } from '../index';

describe('CustomAvatar', () => {
  test('renders CustomAvatar component with loading skeleton', () => {
    render(<CustomAvatar name="John Doe" srcImage="path/to/image.jpg" />);

    // Ensure the loading skeleton is rendered initially
    expect(screen.getByTestId('loading-skeleton')).toBeInTheDocument();
  });

  test('renders CustomAvatar component and handles image load', async () => {
    render(<CustomAvatar name="John Doe" srcImage="valid/image/src.jpg" />);
    
    // Simulate image loading
    fireEvent.load(screen.getByRole('img'));

    // Expect skeleton to be removed after image loads
    expect(screen.queryByTestId('loading-skeleton')).not.toBeInTheDocument();
  });

  test('renders CustomAvatar component and handles image error', () => {
    render(<CustomAvatar name="John Doe" srcImage="invalid/image/src.jpg" />);
    
    // Simulate image error
    fireEvent.error(screen.getByRole('img'));

    // Expect skeleton to be removed after image error
    expect(screen.queryByTestId('loading-skeleton')).not.toBeInTheDocument();
  });
});
