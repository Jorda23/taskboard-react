import { fetchInstance } from '../client';

export const listService = async () => {
  const response = await fetchInstance(`auth/users`, {
    method: 'GET'
  });

  if (!response.data) {
    throw new Error('Failed to fetch data list user');
  }

  return response.data;
};
