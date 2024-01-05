"use client";
import React, { useEffect } from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import { Box } from "@mui/material";
import { useProfileStore } from "@/store/useProfileStore";
import { ProfileProps } from "@/types/profileProps";

export default function Layout({
    session,
    children,
}: {
    session: ProfileProps;
    children: React.ReactNode;
}) {
    //** Zustand */
    const { getProfile } = useProfileStore();

    //** Hooks */
    useEffect(() => {
        getProfile(session);
    }, [getProfile, session]);

    return (
        <Box sx={{ display: "flex" }}>
            <Navbar />
            <Box sx={{ flexGrow: 1 }}>
                <Header />
                <Box sx={{ p: 3 }}>{children}</Box>
            </Box>
        </Box>
    );
}
