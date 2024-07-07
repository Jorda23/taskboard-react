import Layout from '../../components/Layout';
import Navbar from '../../components/Navbar';
import { CreateNewTask } from '../../components/CreateNewTask';
import { TaskList } from '../../components/TaskList';
import { useListTask } from '../../hook/useListTask';
import { useAuthTokenManager } from '../../store/useAuthTokenManager';

const Tasks = () => {
  const { decodedToken } = useAuthTokenManager();
  const { data, isPending, isSuccess, refetch } = useListTask({ idUser:  Number(decodedToken?.userId) });

  return (
    <Layout>
      <Navbar title={'Tasks'} />

      <TaskList data={data ?? []} isPending={isPending} isSuccess={isSuccess} />

      <CreateNewTask refetch={refetch} />
    </Layout>
  );
};

export default Tasks;
