import React, { useState } from 'react';
import { Modal, Box, Typography, Stack, Button, Avatar, CircularProgress, TextField } from '@mui/material';
import { useCreateUser } from '../../hook/useCreateUser';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

const validationSchema = Yup.object().shape({
  userName: Yup.string().required('Username is required'),
  password: Yup.string().required('Password is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  profileImage: Yup.mixed().required('Profile image is required'),
});

const AddUserModal = ({ open, onClose, refetch }) => {
  const { mutate, isPending } = useCreateUser();
  const [imagePreviewUrl, setImagePreviewUrl] = useState('');

  const handleImageUpload = (event, setFieldValue) => {
    const file = event.target.files[0];

    // Preview image
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreviewUrl(reader.result);
    };
    reader.readAsDataURL(file);

    setFieldValue('profileImage', file); // Set Formik field value for profileImage
  };

  const handleSubmit = async (values) => {
    try {
      await mutate({
        UserName: values.userName,
        Password: values.password,
        Email: values.email,
        ImagenPerfilSrc: imagePreviewUrl,
      });
      refetch();
      onClose();
    } catch (error) {
      console.error('Error creating user:', error);
      alert('Error creating user');
    }
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="add-user-modal-title"
      aria-describedby="add-user-modal-description"
    >
      <Box sx={style}>
        <Typography id="add-user-modal-title" variant="h6" component="h2">
          Add New User
        </Typography>
        <Formik
          initialValues={{
            userName: '',
            password: '',
            email: '',
            profileImage: null,
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ setFieldValue, values }) => (
            <Form>
              <Stack spacing={2}>
                <Field
                  name="userName"
                  as={TextField}
                  label="Username"
                  fullWidth
                  variant="outlined"
                />
                <ErrorMessage name="userName" component="div" />

                <Field
                  name="password"
                  as={TextField}
                  label="Password"
                  fullWidth
                  type="password"
                  variant="outlined"
                />
                <ErrorMessage name="password" component="div" />

                <Field
                  name="email"
                  as={TextField}
                  label="Email"
                  fullWidth
                  variant="outlined"
                />
                <ErrorMessage name="email" component="div" />

                <Button variant="contained" component="label">
                  Upload Profile Image
                  <input
                    type="file"
                    hidden
                    accept="image/*"
                    onChange={(event) => handleImageUpload(event, setFieldValue)}
                  />
                </Button>

                {imagePreviewUrl && (
                  <Avatar
                    src={imagePreviewUrl}
                    alt="Profile Image"
                    sx={{ width: 56, height: 56 }}
                  />
                )}

                <Button
                  type="submit"
                  variant="contained"
                  disabled={isPending}
                >
                  {isPending ? <CircularProgress size={24} /> : 'Create User'}
                </Button>
              </Stack>
            </Form>
          )}
        </Formik>
      </Box>
    </Modal>
  );
};

export default AddUserModal;
