import { Box, List, ListItem, ListItemText } from '@mui/material';

import { useAppSelector } from '../../hook/store';
import { TaskWithId } from '../../store/tasks/slice';
import { DeleteTask } from '../DeleteTask';
import CardItem from '../CardItem';

export const TaskList = () => {
  const tasks = useAppSelector((state) => state.tasks);
  
  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        flexWrap: "wrap",
        gap: "20px",
        marginTop: '90px',
        height: '100%'
      }}
    >
      {tasks.map((value: TaskWithId) => {
        const labelId = `checkbox-list-label-${value}`;

        return (
          <CardItem key={value.id} />
          // <ListItem
          //   key={value.id}
          //   disablePadding
          //   sx={{
          //     px: 2,  
          //     py: 1,  
          //   }}
          // >
          //   <ListItemText id={labelId} primary={`${value.name}`} />

          //   <DeleteTask id={value.id}    />
          // </ListItem>
        );
      })}
    </Box>
  );
};
