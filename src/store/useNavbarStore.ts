import { create } from "zustand";

interface NavbarState {
    isExpanse: boolean;
    expanse: () => void;
}

export const useNavbarStore = create<NavbarState>()(set => ({
    isExpanse: false,
    expanse: () => set(state => ({ isExpanse: !state.isExpanse })),
}));
