import { fetchInstance } from '../client';

export interface listTaskResquest {
  idUser: number;
}

export const listTaskService = async ({ idUser }: listTaskResquest) => {
  const response = await fetchInstance(`task/user/${idUser}`, {
    method: 'GET',
  });

  if (!response.data) {
    throw new Error('Failed to fetch data list task');
  }

  return response.data;
};
