import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { logout, setUser } from "../../redux/features/auth/authSlice";
import { useEffect } from "react";
import axios from "axios";
import { API } from "../../api";

const Auth = () => {
  const dispatch = useDispatch();
  const { token } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token);
      const handleAuth = async () => {
        const { data } = await axios.post(
          API.auth,
          { token },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (data?.success) {
          sessionStorage.removeItem("errorMessage");
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
          sessionStorage.setItem("errorMessage", data?.result?.message);
          dispatch(logout());
        }
        navigate("/");
      };
      handleAuth();
    }
  }, [token, dispatch, navigate]);

  return null;
};

export default Auth;
