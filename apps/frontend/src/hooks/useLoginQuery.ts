import { useMutation } from "@tanstack/react-query";
import axios from 'axios';
import { LogInType } from "@root/types/auth";

export const useLoginMutation = () => {
  return useMutation({
    mutationFn: async ({ email, password }: LogInType) => {
      const response = await axios.post('/api/auth/login', { email, password });
      return response.data;
    }
  });
}