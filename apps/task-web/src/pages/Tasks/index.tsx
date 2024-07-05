import { Box, Stack } from '@mui/material';

import Layout from '../../components/Layout';
import Navbar from '../../components/Navbar';
import { CreateNewTask } from '../../components/CreateNewTask';
import { useAppSelector } from '../../hook/store';
import { EmptyTaskMessage } from '../../components/EmptyTaskMessage';
import { TaskList } from '../../components/TaskList';
import CardItem from '../../components/CardItem';

const Tasks = () => {
  const tasks = useAppSelector((state) => state.tasks);

  return (
    <Layout>
      <Navbar title={'Tasks'} />

      {tasks.length === 0 ? <EmptyTaskMessage /> : <TaskList />}

      <CreateNewTask />
    </Layout>
  );
};

export default Tasks;
