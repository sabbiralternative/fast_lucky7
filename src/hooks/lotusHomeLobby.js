import { useQuery } from "@tanstack/react-query";
import { API } from "../api";
import { AxiosSecure } from "../lib/AxiosSecure";

export const useLotusHomeLobby = () => {
  return useQuery({
    queryKey: [`lotus_lobby_home`],
    queryFn: async () => {
      const { data } = await AxiosSecure.post(`${API.lotusHomeLobby}`);

      return data;
    },
    refetchOnWindowFocus: false,
  });
};
