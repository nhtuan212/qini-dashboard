import React from "react";
import { FileOpen } from "@mui/icons-material";
import { ROUTE } from "./routes";
import { TEXT } from "@/constants/text";

export const menu = [
    {
        url: ROUTE.REPORT,
        label: TEXT.REPORT,
        icon: <FileOpen />,
    },
];
