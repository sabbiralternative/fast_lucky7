const PrivateRoute = ({ children }) => {
  // const dispatch = useDispatch();
  // const { token } = useSelector((state) => state.auth);

  // if (Settings.forceLogin) {
  //   if (!token) {
  //     dispatch(logout());
  //     dispatch(setShowLoginModal(true));
  //   }
  // }
  return children;
};

export default PrivateRoute;
