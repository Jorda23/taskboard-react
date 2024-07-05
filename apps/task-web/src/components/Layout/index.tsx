import { ReactNode } from 'react';
import { Box } from '@mui/material';

export default (function Layout({ children }: { children: ReactNode }) {
  return (
    <Box
      data-testid="layout-box"
      minHeight="84vh"
    >
      {children}
    </Box>
  );
});
