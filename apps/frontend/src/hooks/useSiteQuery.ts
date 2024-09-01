import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from 'axios';

interface Site {
  id: number;
  url: string;
}

interface SiteData {
  sites: Site[];
}

export const useSiteListQuery = () => {
  const { isLoading, error, data } = useQuery<SiteData>({
    queryKey: ["sites"],
    queryFn: async () => {
      const response = await axios.get('/api/site/list');
      return { sites: response.data }
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
      const response = await axios.post('/api/site', { url });
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
      const response = await axios.delete(`/api/site/${site.id}`);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["sites"] });
    },
  });
}