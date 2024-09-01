import { useQuery } from "@tanstack/react-query";
import axios from 'axios';

interface SiteStatus {
  id: number;
  up: boolean;
  createdAt: string;
}

interface StatusResponse {
  sites: SiteStatus[];
}

export const useMonitorStatusQuery = () => {
  const { isLoading, error, data } = useQuery<StatusResponse>({
    queryKey: ["status"],
    queryFn: async () => {
      const response = await axios.get('/api/monitor/status');
      return response.data;
    },
    refetchInterval: 1000, // every second
    retry: false,
  });

  return { isLoading, error, data };
};