import { create } from "zustand";

interface BearState {
    isExpanse: boolean;
    expanse: () => void;
}

export const useNavbarSlice = create<BearState>()(set => ({
    isExpanse: false,
    expanse: () => set(state => ({ isExpanse: !state.isExpanse })),
}));

/**
 * use devtools(persist(...)) if want to handle with local storage
 * yarn add @redux-devtools/extension --dev // required for devtools typing
 * import type {} from "@redux-devtools/extension";
 */
