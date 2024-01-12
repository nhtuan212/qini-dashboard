"use client";
import React from "react";
import { MenuItem, StandardTextFieldProps, TextField } from "@mui/material";

interface InputProps extends StandardTextFieldProps {
    data?: any;
}

export default function Input({
    data,
    size = "small",
    onChange,
    ...props
}: InputProps) {
    if (props.select) {
        const handleOnChange = (event: any) => {
            typeof onChange === "function" && onChange(event.target.value);
        };

        return (
            <TextField
                label="Select"
                defaultValue={props.defaultValue || ""}
                size={size}
                onChange={handleOnChange}
                {...props}
            >
                {data?.map((item: any) => (
                    <MenuItem key={item.id} value={item.value}>
                        {item.value}
                    </MenuItem>
                ))}
            </TextField>
        );
    }

    return <TextField size={size} {...props} />;
}
