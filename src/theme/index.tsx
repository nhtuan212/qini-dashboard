"use client";
import { PaletteMode } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { colors } from "./colors";

//** Interface */
interface CustomPalette {
    greyCustom?: string;
}

declare module "@mui/material/styles" {
    // Custom useTheme()
    interface Palette extends CustomPalette {}

    // Custom createTheme()
    interface PaletteOptions extends CustomPalette {}
}

export const theme = ({ mode }: { mode: PaletteMode }) => {
    const isDarkMode: boolean = mode !== "dark";

    return createTheme({
        palette: {
            mode,
            primary: { main: colors.primary["main"] },

            // Custom interface
            greyCustom: isDarkMode ? colors.grey["main"] : colors.grey["600"],
        },
    });
};
