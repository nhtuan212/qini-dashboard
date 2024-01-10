"use client";
import React, { useEffect, useState } from "react";
import { Box, CircularProgress } from "@mui/material";

export default function Loading() {
    //** State */
    const [hasInitializedStore, setHasInitializedStore] = useState(false);

    //** Hooks */
    useEffect(() => {
        if (!hasInitializedStore && typeof window !== "undefined") {
            setHasInitializedStore(true);
        }
    }, [hasInitializedStore]);

    return (
        !hasInitializedStore && (
            <Box
                sx={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100vw",
                    height: "100vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    background: "#fff",
                    zIndex: theme => theme.zIndex.drawer + 1,
                }}
            >
                <CircularProgress />
            </Box>
        )
    );
}
