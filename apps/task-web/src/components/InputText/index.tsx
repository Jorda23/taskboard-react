import React, { ChangeEvent } from 'react';
import { TextField, Typography } from '@mui/material';

interface Props {
  value: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  label?: string;
  name?: string;
}

export const InputText = (props: Props) => {
  const { value, onChange, error, label, name } = props;
  return (
    <>
      <TextField
        label={label ? label : "Name"}
        name={name}
        variant="outlined"
        value={value}
        onChange={onChange}
        sx={{ width: "100%"}}
      />
      {error && (
        <Typography variant="body2" color="error">
          {error}
        </Typography>
      )}
    </>
  );
};
