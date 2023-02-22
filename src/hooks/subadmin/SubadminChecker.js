import useStore from "../../utils/store";

const SubadminChecker = () => {
  const isLogin = useStore((state) => state.isLogin);
  const login = useStore((state) => state.login);
  const jwt = useStore((state) => state.jwt);
  const setJwt = useStore((state) => state.setJwt);
  const currentUserType = useStore((state) => state.currentUserType);
  const setCurrentUserType = useStore((state) => state.setCurrentUserType);
  const user = useStore((state) => state.user);
  const setUser = useStore((state) => state.setUser);

  const isLoggedIn = () => {
    if (
      isLogin &&
      jwt !== null &&
      jwt !== undefined &&
      currentUserType !== null &&
      currentUserType !== undefined &&
      currentUserType === "subadmin" &&
      user !== null &&
      user !== undefined
    ) {
      return true;
    }
    return false;
  };

  const updateSubadminLogin = (jwt, user) => {
    login();
    setJwt(jwt);
    setCurrentUserType("subadmin");
    setUser(user);
    return;
  };

  return { isLoggedIn, updateSubadminLogin };
};

export default SubadminChecker;
