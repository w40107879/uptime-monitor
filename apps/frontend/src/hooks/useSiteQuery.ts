import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axiosInstance from "@/utils/AxiosInstance";
import { SiteListType } from '@root/types/site';

export const useSiteListQuery = () => {
  const { isLoading, error, data } = useQuery<SiteListType>({
    queryKey: ["sites"],
    queryFn: async () => {
      const response = await axiosInstance.get('/api/site/list');
      return response.data
    },
    refetchInterval: 10000, // 10s
    retry: false,
  });

  return { isLoading, error, data };
};

export const useSaveSiteMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (url: string) => {
      const response = await axiosInstance.post('/api/site', { url });
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["sites"] });
      queryClient.invalidateQueries({ queryKey: ["status"] });
    },
  });
}

export const useDeleteSiteMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (site: { id: number }) => {
      const response = await axiosInstance.delete(`/api/site/${site.id}`);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["sites"] });
    },
  });
}