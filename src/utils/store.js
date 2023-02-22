import create from "zustand";
import { persist, devtools } from "zustand/middleware";

let store = (set) => ({
  url: "https://cute-red-shrimp-suit.cyclic.app",
  setUrl: (newUrl) => set((state)=>({url :  newUrl})),

  selectedState: "Chhattisgarh",
  setSelectedState: (newState) => set((state)=> ({selectedState :newState , })),

  //!login
  isLogin: false,
  login: () => set((state) => ({ isLogin: true })),
  logout: () =>
    set((state) => ({
      isLogin: false,
      jwt: null,
      currentUserType: null,
      user: null,
    })),

  //!jwt
  jwt: null,
  setJwt: (newJwt) => set((state) => ({ jwt: newJwt })),

  //! current user type
  currentUserType: null,
  setCurrentUserType: (newUserType) => set((state) => ({
    currentUserType: newUserType,
  })),

  //! user detail
  user: null,
  setUser: (newUser) => set((state) => ({
    user: newUser,
  })),
});

store = persist(store, { name: "fintech_user_new_settings" });
store = devtools(store);

const useStore = create(store);

export default useStore;
