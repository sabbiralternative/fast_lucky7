import { useMutation } from "@tanstack/react-query";
import { AxiosSecure } from "../lib/AxiosSecure";
import { API } from "../api";
import { useDispatch } from "react-redux";
import { logout, setUser } from "../redux/features/auth/authSlice";

export const useAuth = () => {
  const dispatch = useDispatch();

  return useMutation({
    mutationKey: ["auth"],
    mutationFn: async (token) => {
      const { data } = await AxiosSecure.post(API.auth, { token });
      console.log({ data });
      if (data?.success) {
        const result = {
          operatorId: data?.result?.operatorId,
          userId: data?.result?.userId,
          username: data?.result?.username,
          playerTokenAtLaunch: data?.result?.playerTokenAtLaunch,
          token: data?.result?.token,
          balance: data?.result?.balance,
          exposure: data?.result?.exposure,
          currency: data?.result?.currency,
          language: data?.result?.language,
          timestamp: data?.result?.timestamp,
        };
        dispatch(setUser({ ...result }));
      } else {
        dispatch(logout());
      }

      return data;
    },
    gcTime: 0,
  });
};
