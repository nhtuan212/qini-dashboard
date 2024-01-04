"use client";
import React from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import { Box } from "@mui/material";

export default function Layout({ children }: { children: React.ReactNode }) {
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
