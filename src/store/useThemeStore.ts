import { create } from "zustand";
import { persist } from "zustand/middleware";
import { PaletteMode } from "@mui/material";

interface ThemeState {
    themeMode: PaletteMode;
    setModeStore: (mode: PaletteMode) => void;
}

export const useThemeStore = create<ThemeState>()(
    persist(
        set => ({
            themeMode: "light",
            setModeStore: themeMode => set(() => ({ themeMode })),
        }),
        {
            name: "theme", // name of item in the storage (must be unique)
            // storage: createJSONStorage(() => sessionStorage), // (optional) by default the 'localStorage' is used
        },
    ),
);
