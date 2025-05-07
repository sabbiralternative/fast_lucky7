import { API } from "../../../api";
import { baseApi } from "../../api/baseApi";

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    auth: builder.mutation({
      query: (payload) => {
        return {
          url: `${API.auth}`,
          method: "POST",
          body: payload,
        };
      },
    }),
  }),
});

export const {
  useAuthMutation,
  useLoginMutation,
  useChangePasswordMutation,
  useForgotPasswordMutation,
  useGetOtpMutation,
  useRegisterMutation,
} = authApi;
