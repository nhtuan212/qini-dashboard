"use client";
import { PaletteMode } from "@mui/material";
import { createTheme } from "@mui/material/styles";

export const theme = ({ mode }: { mode: PaletteMode }) => {
    return createTheme({
        palette: {
            mode,
            primary: {
                main: "#f06292",
            },
        },
    });
};
