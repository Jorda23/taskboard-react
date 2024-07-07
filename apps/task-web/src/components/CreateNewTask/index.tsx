import { useState } from 'react';
import { Box, Tooltip, Typography } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { useCreateTask } from '../../hook/useCreateTask';
import { CustomButton } from '../Button';
import { CustomIcoButton } from '../IcoButton';
import { InputText } from '../InputText';
import { CustomModal } from '../Modal';
import ImageSearchGallery from '../ImageSearchGallery';
import { useAuthTokenManager } from '../../store/useAuthTokenManager';

interface Props {
  refetch: () => void;
}

export const CreateNewTask = ({ refetch }: Props) => {
  const { mutate, isPending } = useCreateTask();
  const [taskImage, setTaskImage] = useState<string>('');
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { decodedToken } = useAuthTokenManager();

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
    formik.resetForm();
  };

  const formik = useFormik({
    initialValues: {
      taskName: '',
      taskDescription: '',
    },
    validationSchema: Yup.object({
      taskName: Yup.string().required('Please enter a task name before adding.'),
      taskDescription: Yup.string().required('Please enter a task description.'),
    }),
    onSubmit: (values) => {
      mutate(
        {
          Title: values.taskName,
          Description: values.taskDescription,
          ImageSrc: taskImage,
          UserId: Number(decodedToken?.userId),
        },
        {
          onSuccess: () => {
            handleClose();
            setTaskImage('');
            refetch();
          },
          onError: () => {
            formik.setFieldError('taskName', 'Failed to create task.');
          },
        }
      );
    },
  });

  const handleImageSelect = (image: string) => {
    setTaskImage(image);
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
          <form onSubmit={formik.handleSubmit}>
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
              <CustomButton label={'Save'} type="success" onClick={formik.handleSubmit} />
            </Box>
            <Box sx={{ gap: '10px', display: 'flex', flexDirection: 'column' }}>
              <InputText
                label="Title"
                name="taskName"
                value={formik.values.taskName}
                onChange={formik.handleChange}
                error={formik.touched.taskName && formik.errors.taskName ? formik.errors.taskName : ''}
              />
              <InputText
                label="Description"
                name="taskDescription"
                value={formik.values.taskDescription}
                onChange={formik.handleChange}
                error={formik.touched.taskDescription && formik.errors.taskDescription ? formik.errors.taskDescription : ''}
              />
            </Box>
          </form>
          <ImageSearchGallery handleImageSelect={handleImageSelect} />
        </Box>
      </CustomModal>
    </>
  );
};
