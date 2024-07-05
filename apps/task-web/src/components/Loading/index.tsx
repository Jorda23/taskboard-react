import { Box, CircularProgress } from '@mui/material';

export const Loading = () => {
  return (
    <Box
      data-testid="loading-box"

      sx={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <CircularProgress data-testid="loading-circular-progress" />
    </Box>
  );
};
