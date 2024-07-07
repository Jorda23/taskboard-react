import { useQuery } from '@tanstack/react-query';
import {
  listTaskResquest,
  listTaskService,
} from '../../services/listTaskService';

export interface taskResponse {
  Id: number;
  Title: string;
  Description: string;
  ImageSrc: string;
  User: {
    Username: string;
  };
}

export const useListTask = ({ idUser }: listTaskResquest) => {
  const queryKey = ['listTask', idUser];

  return useQuery<taskResponse[]>({
    queryKey,
    queryFn: () => listTaskService({ idUser }),
    staleTime: Infinity,
    retry: false,
  });
};
