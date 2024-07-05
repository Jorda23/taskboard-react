import { Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import LogoTask from '../../assets/image/logoOnly.png';

import { CustomButton } from '../Button';

interface Props {
  title: string;
}

const Navbar = (props: Props) => {
  const { title } = props;

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/home');
  };

  return (
    <Box
      position="fixed"
      sx={{
        height: '74px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        left: 0,
        top: 0,
        width: '100%',
        zIndex: 100,
        color: 'white',
        background:
        "linear-gradient( 90deg, #005dab 0%, #002683 100% );",
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          marginLeft: '20px',
        }}
      >
        <img src={LogoTask} alt="Logo" width={80} height={80} />
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          marginRight: '20px',
        }}
      >
        <CustomButton label={'Back'} onClick={handleNavigate}></CustomButton>
      </Box>
    </Box>
  );
};

export default Navbar;
