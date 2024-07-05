import { useQuery } from '@tanstack/react-query';
import { fetchPixel } from '../../services/pixels';
import { PexelsResponse } from './interface/pixel.interface';

export const usePexels = (query: string) => {
  const queryKey = ['pexels', query];

  return useQuery<PexelsResponse>({
    queryKey,
    queryFn: () => fetchPixel(query),
    staleTime: Infinity,
    retry: false,
  });
};
