import React from 'react';
import Drawer from '@mui/material/Drawer';
import { styled } from '@mui/material';

interface Props {
  isOpen: boolean;
  handleClose: () => void;
  children: React.ReactNode;
}

export const CustomDrawerStyle = styled(Drawer)`
  .css-1bdbtjk-MuiPaper-root-MuiDrawer-paper {
    width: 400px;
  }
`;

export const CustomModal = (props: Props) => {
  const { handleClose, isOpen, children } = props;

  return (
    <CustomDrawerStyle open={isOpen} onClose={handleClose}>
      {children}
    </CustomDrawerStyle>
  );
};
