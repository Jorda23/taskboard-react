import React from 'react';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { CreateNewTask } from '..';
import { useTaskActions } from '../../../hook/useTaskActions';

jest.mock('../../../hook/useTaskActions', () => ({
  useTaskActions: jest.fn(),
}));

const mockUseTaskActions = useTaskActions as jest.MockedFunction<
  typeof useTaskActions
>;

describe('CreateNewTask', () => {
  const addTaskMock = jest.fn();

  beforeEach(() => {
    mockUseTaskActions.mockReturnValue({
      addTask: addTaskMock,
      removeTask: jest.fn(),
    });
  });

  test('renders without crashing', () => {
    render(<CreateNewTask />);
    expect(screen.getByLabelText('AddTask')).toBeInTheDocument();
  });

  test('opens modal on button click', () => {
    render(<CreateNewTask />);
    fireEvent.click(screen.getByLabelText('AddTask'));
    expect(screen.getByTestId('custom-modal')).toBeInTheDocument();
  });

  test('allows entering a task name', () => {
    render(<CreateNewTask />);
    fireEvent.click(screen.getByLabelText('AddTask'));

    const inputField = screen.getByLabelText('Name');
    fireEvent.change(inputField, { target: { value: 'New Task' } });

    expect(inputField).toHaveValue('New Task');
  });

  test('adds a task and closes modal on submit', async () => {
    render(<CreateNewTask />);

    // Open the modal
    fireEvent.click(screen.getByLabelText('AddTask'));

    // Wait for the modal and textbox to be in the document
    const textBox = await screen.findByRole('textbox');
    fireEvent.change(textBox, { target: { value: 'New Task' } });
    fireEvent.click(screen.getByText('Add'));

    await waitFor(() => {
      expect(addTaskMock).toHaveBeenCalledWith({ name: 'New Task' });
    });

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  test('shows error when trying to add empty task', async () => {
    render(<CreateNewTask />);

    fireEvent.click(screen.getByLabelText('AddTask'));
    fireEvent.click(screen.getByText('Add'));

    expect(
      await screen.findByText('Please enter a task name before adding.')
    ).toBeInTheDocument();
  });
});
