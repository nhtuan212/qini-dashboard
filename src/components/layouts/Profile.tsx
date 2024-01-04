import React, { useState } from "react";
import { Avatar, IconButton, Menu, MenuItem } from "@mui/material";
import { TEXT } from "@/constants/text";

export default function Profile() {
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
                <Avatar alt="" />
            </IconButton>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    "aria-labelledby": "basic-button",
                }}
            >
                <MenuItem onClick={handleClose}>{TEXT.LOGOUT}</MenuItem>
            </Menu>
        </>
    );
}
