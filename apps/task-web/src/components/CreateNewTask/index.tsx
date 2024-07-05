import { ChangeEvent, useState } from 'react';
import { Box, Tooltip, Typography } from '@mui/material';

import { useTaskActions } from '../../hook/useTaskActions';
import { CustomButton } from '../Button';
import { CustomIcoButton } from '../IcoButton';
import { InputText } from '../InputText';
import { CustomModal } from '../Modal';
import ImageSearchGallery from '../ImageSearchGallery';

export const CreateNewTask = () => {
  const { addTask } = useTaskActions();

  const [taskName, setTaskName] = useState<string>('');
  const [error, setError] = useState<string>('');

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
    setError('');
  };

  const handleTaskNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTaskName(event.target.value);
    setError('');
  };

  const handleAddTask = () => {
    if (taskName.trim() === '') {
      // Set the error message if the input is empty
      setError('Please enter a task name before adding.');
    } else {
      addTask({ name: taskName });
      handleClose();
      setTaskName('');
    }
  };
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'fixed',
          marginRight: '20px',
          marginBottom: '30px',
          right: 0,
          bottom: 0,
        }}
      >
        <Tooltip title="Add Task" arrow>
          <div>
            <CustomIcoButton
              icon="IconPlus"
              type="success"
              onClick={handleOpen}
              ariaLabel={'AddTask'}
            />
          </div>
        </Tooltip>
      </Box>

      <CustomModal isOpen={isOpen} handleClose={handleClose}>
        <Box sx={{ padding: 2 }}>
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '10px',
            }}
          >
            <Typography variant="h6">Add Task</Typography>

            <CustomButton
              label={'Save'}
              type="success"
              onClick={handleAddTask}
            />
          </Box>
          <InputText
            label="Task Name"
            error={error}
            value={taskName}
            onChange={handleTaskNameChange}
          />
        </Box>

        <ImageSearchGallery />
      </CustomModal>
    </>
  );
};
