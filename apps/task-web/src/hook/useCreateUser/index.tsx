import { useMutation, UseMutationResult } from '@tanstack/react-query';
import {
  createUserService,
  CreateUserResquest,
} from '../../services/createUserService';

export const useCreateUser = (): UseMutationResult<
  any,
  Error,
  CreateUserResquest
> => {
  return useMutation<any, Error, CreateUserResquest>({
    mutationFn: createUserService,
  });
};
