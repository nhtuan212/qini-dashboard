"use client";
import React, { useEffect, useState } from "react";
import { useThemeStore } from "@/store/useThemeStore";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from ".";

export default function CustomThemeProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    //** Zustand */
    const { themeMode } = useThemeStore();

    //** State */
    const [mode, setMode] = useState<any>("light");

    //** Hooks */
    useEffect(() => {
        setMode(themeMode);
    }, [themeMode]);

    return (
        <ThemeProvider theme={theme({ mode })}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    );
}
