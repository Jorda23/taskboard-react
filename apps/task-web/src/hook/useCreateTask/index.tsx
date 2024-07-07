import { useMutation, UseMutationResult } from '@tanstack/react-query';
import {
  CreateTaskResquest,
  createTaskService,
} from '../../services/createTaskService';

export const useCreateTask = (): UseMutationResult<
  any,
  Error,
  CreateTaskResquest
> => {
  return useMutation<any, Error, CreateTaskResquest>({
    mutationFn: createTaskService,
  });
};
