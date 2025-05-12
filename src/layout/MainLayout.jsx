import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { useAuthMutation } from "../redux/features/auth/authApi";
import { useEffect } from "react";
import { setUser } from "../redux/features/auth/authSlice";

const MainLayout = () => {
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [handleAuth] = useAuthMutation();

  useEffect(() => {
    let intervalId;

    if (token) {
      const getUser = async () => {
        const res = await handleAuth({ token }).unwrap();

        dispatch(
          setUser({
            username: res.username,
            balance: res?.balance,
            token,
          })
        );
      };

      getUser();

      intervalId = setInterval(() => {
        getUser();
      }, 30000);
    }

    return () => clearInterval(intervalId);
  }, [token, handleAuth, dispatch]);
  return (
    <div>
      <div
        className="absolute top-0 left-0 flex items-center justify-center w-full h-full gap-2 p-4 text-center text-white bg-black lg:hidden"
        style={{ zIndex: 1000, display: "none" }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
          data-slot="icon"
          className="w-8 h-8 text-yellow"
        >
          <path
            fillRule="evenodd"
            d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
            clipRule="evenodd"
          />
        </svg>
        Game is not available in landscape mode! <br />
        Please rotate your device to portrait mode.
      </div>
      <Outlet />
    </div>
  );
};

export default MainLayout;
