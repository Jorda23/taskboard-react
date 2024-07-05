import { Task, TaskId, addNewTask, deleteTaskById } from '../store/tasks/slice';
import { useAppDispatch } from './store';

export const useTaskActions = () => {
  const dispatch = useAppDispatch();

  const addTask = ({ name }: Task) => {
    dispatch(addNewTask({ name }));
  };

  const removeTask = (id: TaskId) => {
    dispatch(deleteTaskById(id));
  };

  return { addTask, removeTask };
};
