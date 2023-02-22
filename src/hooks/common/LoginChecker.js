import useStore from "../../utils/store";

const LoginChecker = () => {
  const isLogin = useStore((state) => state.isLogin);
  const jwt = useStore((state) => state.jwt);
  const currentUserType = useStore((state) => state.currentUserType);
  const user = useStore((state) => state.user);

  const isLoggedIn = () => {
    if (
      isLogin &&
      jwt !== null &&
      jwt !== undefined &&
      currentUserType !== null &&
      currentUserType !== undefined &&
      user !== null &&
      user !== undefined
    ) {
      return [true, currentUserType];
    }
    return [false , null];
  };

  return { isLoggedIn };
};

export default LoginChecker;
