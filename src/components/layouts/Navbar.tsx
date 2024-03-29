"use client";
import React, { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useNavbarStore } from "@/store/useNavbarStore";
import { ChevronLeft, Menu } from "@mui/icons-material";
import {
    Box,
    Divider,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Tooltip,
    useTheme,
} from "@mui/material";
import { menu } from "@/config/menu";

export default function Navbar() {
    //** Zustand */
    const { isExpanse, expanse } = useNavbarStore();

    //** Variables */
    const router = useRouter();
    const pathname = usePathname();
    const theme = useTheme();

    //** States */
    const [activeRoute, setActiveRoute] = useState("");

    //** Hooks */
    useEffect(() => {
        setActiveRoute(pathname);
    }, [pathname]);

    return (
        <Drawer
            variant="permanent"
            open={isExpanse}
            sx={theme => ({
                "& .MuiDrawer-paper": {
                    position: "static",
                    width: isExpanse ? 240 : `calc(${theme.spacing(7)} + 1px)`,
                    height: "100vh",
                    overflowX: "hidden",
                    transition: "all 0.3s ease-in-out",
                },
            })}
        >
            <Box
                sx={theme => ({
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-end",
                    padding: theme.spacing(0, 1),
                    // necessary for content to be below app bar
                    ...theme.mixins.toolbar,
                })}
            >
                <IconButton onClick={() => expanse()}>
                    {isExpanse ? <ChevronLeft /> : <Menu />}
                </IconButton>
            </Box>
            <Divider />
            <List>
                {menu.map(item => (
                    <ListItem
                        key={item.label}
                        disablePadding
                        sx={{ display: "block" }}
                        onClick={() => {
                            setActiveRoute(item.url);
                            router.push(item.url);
                        }}
                    >
                        <ListItemButton
                            sx={{
                                minHeight: 48,
                                justifyContent: isExpanse
                                    ? "initial"
                                    : "center",

                                ...(activeRoute === item.url && {
                                    background: theme.palette.greyCustom,
                                }),
                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    justifyContent: "center",
                                }}
                            >
                                <Tooltip title={item.label}>
                                    {item.icon}
                                </Tooltip>
                            </ListItemIcon>
                            <ListItemText
                                sx={{
                                    ml: isExpanse ? 2 : 0,
                                    opacity: isExpanse ? 1 : 0,
                                    whiteSpace: "nowrap",
                                }}
                                primary={item.label}
                            />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Drawer>
    );
}
