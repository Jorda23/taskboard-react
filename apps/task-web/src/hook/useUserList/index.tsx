import { useQuery } from '@tanstack/react-query';
import { listService } from '../../services/listService';

export interface UserProfile {
  Id: number;
  Username: string;
  Password: string | null;
  Email: string;
  ImagenPerfilSrc: string;
}

export const useUserList = () => {
  const queryKey = ['listUser'];

  return useQuery<UserProfile[]>({
    queryKey,
    queryFn: () => listService(),
    staleTime: Infinity,
    retry: false,
  });
};
