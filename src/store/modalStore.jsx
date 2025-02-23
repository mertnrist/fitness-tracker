import { create } from "zustand";

const useModalStore = create((set) => ({
    loginModal: false,
    registerModal: false,
    changeLoginModal: () => set((state) => ({ loginModal: !state.loginModal })), // Doğru
    changeRegisterModal: () => set((state) => ({ registerModal: !state.registerModal })), // Doğru
}));

export { useModalStore };
