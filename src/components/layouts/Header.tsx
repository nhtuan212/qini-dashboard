import React from "react";
import Logo from "@/components/Logo";
import Profile from "./Profile";
import ModeSwitch from "../ModeSwitch";
import { Box, AppBar, Container, Toolbar } from "@mui/material";

export default function Header() {
    return (
        <AppBar position="static">
            <Container maxWidth={false}>
                <Toolbar disableGutters>
                    <Box sx={{ flexGrow: 1 }}>
                        <Logo />
                    </Box>
                    <Box>
                        <ModeSwitch />
                        <Profile />
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
