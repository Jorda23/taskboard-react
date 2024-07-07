import { Box, CircularProgress } from '@mui/material';
import CardItem from '../CardItem';
import { taskResponse } from '../../hook/useListTask';
import { EmptyTaskMessage } from '../EmptyTaskMessage';

interface Props {
  data: taskResponse[];
  isPending: boolean;
  isSuccess: boolean;
}

export const TaskList = ({ data, isPending, isSuccess }:Props) => {

  return (
    <>
      {isPending && (
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
          }}
        >
          <CircularProgress />
        </Box>
      )}

      {!isPending && data?.length === 0 && <EmptyTaskMessage />}

      <Box
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-start',
          flexWrap: 'wrap',
          gap: '20px',
          marginTop: '90px',
          height: '100%',
        }}
      >
        {isSuccess && data?.map((value: taskResponse) => {
          return <CardItem key={value.Id} {...value} />;
        })}
      </Box>
    </>
  );
};
