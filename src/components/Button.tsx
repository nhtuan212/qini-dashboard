import React from "react";
import { Button, ButtonProps } from "@mui/material";

export default function ButtonComponent({
    variant = "contained",
    ...props
}: ButtonProps) {
    return (
        <Button
            variant={variant}
            sx={{ textTransform: "inherit", ...props.sx }}
            {...props}
        >
            {props.children}
        </Button>
    );
}
