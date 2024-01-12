import { create } from "zustand";

interface DialogState {
    isDialogOpen: boolean;
    dialogOpen: (status: boolean) => void;
}

export const useDialogStore = create<DialogState>()(set => ({
    isDialogOpen: false,
    dialogOpen: status => set(() => ({ isDialogOpen: status })),
}));
