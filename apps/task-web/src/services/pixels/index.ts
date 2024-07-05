import { fetchInstance } from '../client';

export const fetchPixel = async (query: string) => {
  const response = await fetchInstance(`images/search?query=${query}`, {
    method: 'GET'
  });

  if (!response.data) {
    throw new Error('Failed to fetch data IMAGE');
  }

  return response.data;
};
