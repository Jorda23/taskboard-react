import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { UserData } from './interface/ElementType';
import fetch from 'cross-fetch';

// Define the base URL as a constant for easier management
const BASE_URL = 'https://6172cfe5110a740017222e2b.mockapi.io';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL, fetchFn: fetch }),
  endpoints: (builder) => ({
    getElements: builder.query<UserData[], void>({
      query: () => 'elements',
      keepUnusedDataFor: 0,
    }),
  }),
});

// Export hooks for your endpoints
export const { useGetElementsQuery } = api;
