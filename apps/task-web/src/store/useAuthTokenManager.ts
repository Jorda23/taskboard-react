import { createWithEqualityFn } from 'zustand/traditional';
import { createJSONStorage, persist } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { jwtDecode } from 'jwt-decode';
import 'core-js/stable/atob';

interface ITokenPayload {
  unique_name: string;
  userId: string;
}

interface AuthenticationState {
  decodedToken: ITokenPayload | null;

  decodeToken: (token: string) => void;
}

/**
 * useAuthTokenManager is a custom hook that manages authentication state.
 */
export const useAuthTokenManager = createWithEqualityFn(
  persist<AuthenticationState>(
    (set) => ({
      decodedToken: null,

      decodeToken: (token: string) => {
        try {
          const decoded = jwtDecode<ITokenPayload>(token);

          set({ decodedToken: decoded });
        } catch (error) {
          console.error('Error decoding token:', error);
          set({ decodedToken: null });
        }
      },
    }),
    {
      name: 'auth-token',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
