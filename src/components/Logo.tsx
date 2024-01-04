"use client";
import React from "react";
import { Box, Typography } from "@mui/material";
import SvgIcon from "@mui/material/SvgIcon";

export default function Logo() {
    return (
        <Box sx={{ display: "flex", alignItems: "center" }}>
            <SvgIcon
                xmlns="http://www.w3.org/2000/svg"
                aria-label={`${process.env.NEXT_PUBLIC_SITE_NAME} logo`}
                viewBox="0 0 32 28"
                sx={{ width: "2rem", height: "2rem" }}
            >
                <path d="M21.5758 9.75769L16 0L0 28H11.6255L21.5758 9.75769Z" />
                <path d="M26.2381 17.9167L20.7382 28H32L26.2381 17.9167Z" />
            </SvgIcon>
            <Typography sx={{ ml: 1, fontSize: "1.5rem" }}>
                {process.env.NEXT_PUBLIC_SITE_NAME}
            </Typography>
        </Box>
    );
}
