import { fetchInstance } from '../client';

export interface CreateTaskResquest {
  Title: string;
  Description: string;
  ImageSrc: string;
  UserId: number;
}

export const createTaskService = async (data: CreateTaskResquest) => {
  const response = await fetchInstance(`task`, {
    method: 'POST',
    data: JSON.stringify({
      ...data,
    }),
  });

  if (!response.data) {
    throw new Error('Failed to fetch create task');
  }

  return response.data;
};
