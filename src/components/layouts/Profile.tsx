"use client";
import React, { useState } from "react";
import { signOut } from "next-auth/react";
import { useProfileStore } from "@/store/useProfileStore";
import {
    Avatar,
    Divider,
    IconButton,
    ListItemIcon,
    Menu,
    MenuItem,
} from "@mui/material";
import { Logout, Settings } from "@mui/icons-material";
import { TEXT } from "@/constants/text";

export default function Profile() {
    //** Zustand */
    const { profile } = useProfileStore();

    //** States */
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    //** Variables */
    const open = Boolean(anchorEl);

    //** Functions */
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <IconButton onClick={handleClick} sx={{ p: 0 }}>
                <Avatar>{profile?.lastName?.charAt(0)}</Avatar>
            </IconButton>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    "aria-labelledby": "basic-button",
                }}
                sx={{
                    overflow: "visible",
                    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                    mt: 1.5,
                    "& .MuiAvatar-root": {
                        width: 32,
                        height: 32,
                        ml: -0.5,
                        mr: 1,
                    },
                    "& .MuiPaper-root": {
                        overflow: "visible",
                        "&::before": {
                            content: "''",
                            display: "block",
                            position: "absolute",
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: "background.paper",
                            transform: "translateY(-50%) rotate(45deg)",
                            zIndex: 0,
                        },
                    },
                }}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
                <MenuItem onClick={handleClose}>
                    <Avatar />
                    {`${profile?.lastName} ${profile?.firstName}`}
                </MenuItem>
                <Divider />
                <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                        <Settings fontSize="small" />
                    </ListItemIcon>
                    {TEXT.SETTING}
                </MenuItem>
                <MenuItem
                    onClick={async () =>
                        await signOut().then(() => {
                            localStorage.clear();
                        })
                    }
                >
                    <ListItemIcon>
                        <Logout fontSize="small" />
                    </ListItemIcon>
                    {TEXT.LOGOUT}
                </MenuItem>
            </Menu>
        </>
    );
}
