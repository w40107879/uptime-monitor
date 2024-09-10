import { useQuery } from "@tanstack/react-query";
import axiosInstance from "@/utils/AxiosInstance";
import { MonitorStatusType } from "@root/types/monitor";

export const useMonitorStatusQuery = () => {
  const { isLoading, error, data } = useQuery<MonitorStatusType[]>({
    queryKey: ["status"],
    queryFn: async () => {
      const response = await axiosInstance.get('/api/monitor/status');
      return response.data;
    },
    refetchInterval: 1000, // every second
    retry: false,
  });

  return { isLoading, error, data };
};