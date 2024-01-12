"use client";
import React from "react";
import Dialog, { DialogProps } from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { useDialogStore } from "@/store/useDialogStore";
import { DialogActions, DialogContent } from "@mui/material";

interface DialogComponentProps extends DialogProps {
    closeIcon?: boolean;
}

const DialogComponent = ({
    children,
    closeIcon = true,
    fullWidth = true,
    maxWidth = "md",
    ...props
}: DialogComponentProps) => {
    //** Zustand */
    const { dialogOpen } = useDialogStore();

    //** Functions */
    const handleClose = () => {
        dialogOpen(false);
    };

    return (
        <Dialog
            onClose={handleClose}
            aria-labelledby={props.title}
            fullWidth={fullWidth}
            maxWidth={maxWidth}
            {...props}
        >
            {props.title && (
                <>
                    <DialogTitle sx={{ m: 0, p: 2 }} id={props.title}>
                        {props.title}
                    </DialogTitle>
                    {closeIcon && (
                        <IconButton
                            aria-label="close"
                            onClick={handleClose}
                            sx={{
                                position: "absolute",
                                right: 8,
                                top: 8,
                                color: theme => theme.palette.grey[500],
                            }}
                        >
                            <CloseIcon />
                        </IconButton>
                    )}
                </>
            )}

            {children}
        </Dialog>
    );
};

const Content = ({ children }: { children?: React.ReactNode }) => {
    return <DialogContent dividers>{children}</DialogContent>;
};

const Action = ({ children }: { children?: React.ReactNode }) => {
    return <DialogActions>{children}</DialogActions>;
};

DialogComponent.Content = Content;
DialogComponent.Action = Action;

export default DialogComponent;
