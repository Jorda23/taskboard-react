import React from 'react';
import { render, fireEvent, screen, waitFor, within } from '@testing-library/react';
import '@testing-library/jest-dom';
import { DeleteTask } from '..';
import { useTaskActions } from '../../../hook/useTaskActions';

jest.mock('../../../hook/useTaskActions', () => ({
  useTaskActions: jest.fn(),
}));

const mockUseTaskActions = useTaskActions as jest.MockedFunction<
  typeof useTaskActions
>;

describe('DeleteTask', () => {
  const mockRemoveTask = jest.fn();

  beforeEach(() => {
    mockUseTaskActions.mockReturnValue({
      addTask: jest.fn(),
      removeTask: mockRemoveTask,
    });
  });

  test('renders without crashing', () => {
    render(<DeleteTask id={'21'} />);
    expect(screen.getByLabelText('deleteTask')).toBeInTheDocument();
  });

  test('opens modal on button click', () => {
    render(<DeleteTask id={'21'} />);
    fireEvent.click(screen.getByLabelText('deleteTask'));
    expect(screen.getByText('Are you sure to delete the task?')).toBeInTheDocument();
  });

  test('closes modal on cancel', async () => {
    render(<DeleteTask id={'21'} />);
    fireEvent.click(screen.getByLabelText('deleteTask'));
    fireEvent.click(screen.getByText('Cancel'));
    await waitFor(() => {
      expect(screen.queryByText('Are you sure to delete the task?')).not.toBeInTheDocument();
    });
  });

  test('calls removeTask on delete', async () => {
    render(<DeleteTask id={'21'} />);
    fireEvent.click(screen.getByLabelText('deleteTask'));
  
    const modal = screen.getByTestId('custom-modal');
    expect(modal).toBeInTheDocument();
  
    // Wait for the delete button to appear and then click it
    const deleteButton = await within(modal).findByTestId('delete-task-21');
    fireEvent.click(deleteButton);
  
    // Check if removeTask was called with the correct ID
    expect(mockRemoveTask).toHaveBeenCalledWith('21');
  });
  
});
