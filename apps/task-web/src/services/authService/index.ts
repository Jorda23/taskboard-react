import { fetchInstance } from '../client';

export interface LoginRequest {
  UserName: string;
  Password: string;
}

export interface AuthResponse {
  Token: string;
}

export const authService = async ({
  Password,
  UserName,
}: LoginRequest): Promise<AuthResponse> => {
  const response = await fetchInstance(`auth/login`, {
    method: 'POST',
    data: JSON.stringify({
      UserName,
      Password,
    }),
  });

  if (!response.data) {
    throw new Error('Failed to fetch data AUTH');
  }

  return response.data;
};
