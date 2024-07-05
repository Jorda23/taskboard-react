import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { CustomModal } from '../index';
import '@testing-library/jest-dom';

describe('CustomModal Component', () => {
  it('renders the modal', () => {
    render(
      <CustomModal isOpen={false} handleClose={() => {}}>
        <div>Test Content</div>
      </CustomModal>
    );
    expect(screen.queryByText('Test Content')).not.toBeInTheDocument();
  });

  it('is visible when isOpen is true', () => {
    render(
      <CustomModal isOpen={true} handleClose={() => {}}>
        <div>Test Content</div>
      </CustomModal>
    );
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  it('is not visible when isOpen is false', () => {
    render(
      <CustomModal isOpen={false} handleClose={() => {}}>
        <div>Test Content</div>
      </CustomModal>
    );
    expect(screen.queryByText('Test Content')).not.toBeInTheDocument();
  });

  it('calls handleClose on close', () => {
    const handleClose = jest.fn();
    render(
      <CustomModal isOpen={true} handleClose={handleClose}>
        <div>Test Content</div>
      </CustomModal>
    );
    fireEvent.keyDown(screen.getByRole('presentation'), { key: 'Escape' });
    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it('renders children content correctly', () => {
    const childContent = <div>Child Content</div>;
    render(
      <CustomModal isOpen={true} handleClose={() => {}}>
        {childContent}
      </CustomModal>
    );
    expect(screen.getByText('Child Content')).toBeInTheDocument();
  });
});
