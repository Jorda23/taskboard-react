import {
  Box,
  Container,
  IconButton,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { GrTask } from 'react-icons/gr';
import { useNavigate } from 'react-router-dom';

import Layout from '../../components/Layout';
import { CustomButton } from '../../components/Button';
import ImageHome from '../../assets/image/ImageHome.jpg';
import { TbLogout2 } from 'react-icons/tb';

const Home = () => {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => () => {
    navigate(path);
  };

  const handleLogout = () => {
    localStorage.removeItem('auth-token');
    navigate('/');
  };

  return (
    <Box
      sx={{
        height: '96vh',
      }}
    >
      <Box sx={{ position: 'fixed', left: 10 }}>
        <IconButton
          onClick={handleLogout}
          aria-label="delete"
          size="small"
          sx={{
            color: '#002683',
          }}
        >
          <TbLogout2 fontSize={'30px'} />
        </IconButton>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: '100%',
        }}
      >
        <Stack
          direction="column"
          justifyContent={'center'}
          sx={{
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Box
            flexDirection={'column'}
            display={'flex'}
            justifyContent={'center'}
            alignItems={'flex-start'}
            width={'75%'}
            marginBottom={'40px'}
          >
            <Typography fontSize={'3em'} fontWeight={'900'}>
              Speed up your work with Task Manager
            </Typography>
            <Typography color={'gray'}>
              Manage your tasks with ease and simplicity
            </Typography>
          </Box>

          <Box
            flexDirection={'row'}
            display={'flex'}
            justifyContent={'flex-start'}
            alignItems={'center'}
            width={'70%'}
            gap={'20px'}
          >
            <CustomButton
              label={'Tasks'}
              onClick={handleNavigation('/tasks')}
            />

            <CustomButton
              type={'newType'}
              label={'List'}
              onClick={handleNavigation('/list')}
            />
          </Box>
        </Stack>

        <Box
          sx={{
            width: '70%',
            height: '100%',
          }}
        >
          <img
            src={ImageHome}
            style={{
              objectFit: 'cover',
              borderRadius: '20px',
            }}
            alt="Logo"
            width={'100%'}
            height={'100%'}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
