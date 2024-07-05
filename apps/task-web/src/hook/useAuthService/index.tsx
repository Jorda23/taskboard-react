import { useMutation, UseMutationResult } from '@tanstack/react-query';
import { AuthResponse, authService, LoginRequest } from '../../services/authService';

export const useAuthService = (): UseMutationResult<AuthResponse, Error, LoginRequest> => {
    return useMutation<AuthResponse, Error, LoginRequest>({
        mutationFn: authService
    });
};
