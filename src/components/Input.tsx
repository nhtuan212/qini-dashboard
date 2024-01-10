import React from "react";
import { StandardTextFieldProps, TextField } from "@mui/material";

export default function Input({ ...props }: StandardTextFieldProps) {
    return <TextField {...props} />;
}
