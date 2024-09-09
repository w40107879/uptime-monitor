import { useMutation } from "@tanstack/react-query";
import axios from 'axios';
import { LogInType, RegisterType, AuthResponse } from "@root/types/auth";
import { ErrorResponse } from "@root/types/general";

export const useLoginMutation = () => {
  return useMutation<AuthResponse, unknown, LogInType>({
    mutationFn: async ({ email, password }: LogInType) => {
      const response = await axios.post('/api/auth/login', { email, password });
      return response.data;
    }
  });
}

export const useRegisterMutation = () => {
  return useMutation<AuthResponse, ErrorResponse, LogInType>({
    mutationFn: async ({ email, password }: RegisterType) => {
      const response = await axios.post('/api/auth/register', { email, password });
      return response.data;
    }
  });
}