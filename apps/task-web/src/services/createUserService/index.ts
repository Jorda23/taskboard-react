import { fetchInstance } from '../client';

export interface CreateUserResquest {
  UserName: string;
  Password: string;
  ImagenPerfilSrc: string;
  Email: string;
}

export const createUserService = async (data: CreateUserResquest) => {
  const response = await fetchInstance(`auth/register`, {
    method: 'POST',
    data: JSON.stringify({
      ...data,
    }),
  });

  if (!response.data) {
    throw new Error('Failed to fetch create user');
  }

  return response.data;
};
