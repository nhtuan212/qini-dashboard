"use client";
import React from "react";
import { useSearchParams } from "next/navigation";
import { signIn } from "next-auth/react";
import {
    Avatar,
    Box,
    Button,
    Checkbox,
    Container,
    FormControlLabel,
    Grid,
    Link,
    TextField,
    Typography,
} from "@mui/material";
import { LockOutlined } from "@mui/icons-material";
import { ROUTE } from "@/config/routes";
import { TEXT } from "@/constants/text";

export default function Login() {
    //** Variables */
    const searchParams = useSearchParams();

    //** States */
    const [error, setError] = React.useState<string>("");

    //** Functions */
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);

        const email = data.get("email");
        const password = data.get("password");

        if (!email || !password) {
            return setError("All fields are necessary");
        }

        try {
            await signIn("credentials", {
                email,
                password,
                // redirect: false,
                callbackUrl: searchParams.get("callbackUrl") || ROUTE.HOME,
            })
                .then(res => res)
                .catch(err => {
                    setError(err.message);
                });
        } catch (error) {
            console.log({ error });
        }
    };

    return (
        <Container component="main" maxWidth="xs">
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100vh",
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                    <LockOutlined />
                </Avatar>
                <Typography component="h1" variant="h5">
                    {TEXT.LOGIN}
                </Typography>
                <Box
                    component="form"
                    onSubmit={handleSubmit}
                    noValidate
                    sx={{ mt: 1 }}
                >
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id={TEXT.EMAIL}
                        name="email"
                        label={TEXT.EMAIL}
                        autoComplete={TEXT.EMAIL}
                        autoFocus
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id={TEXT.PASSWORD}
                        name="password"
                        label={TEXT.PASSWORD}
                        type="password"
                        autoComplete="current-password"
                    />
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label={TEXT.REMEMBER_ME}
                    />

                    {error && <Typography>{error}</Typography>}

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        {TEXT.LOGIN}
                    </Button>

                    <Grid container direction="row" justifyContent="flex-end">
                        <Link href="#" variant="body2">
                            {TEXT.FORGOT_PASSWORD}
                        </Link>
                        {/* <Link href="#" variant="body2">
                            {"Don't have an account? Sign Up"}
                        </Link> */}
                    </Grid>

                    <Typography
                        variant="body2"
                        color="text.secondary"
                        align="center"
                        sx={{ mt: 8, mb: 4 }}
                    >
                        {`Copyright © ${
                            process.env.NEXT_PUBLIC_SITE_NAME
                        } ${new Date().getFullYear()}.`}
                    </Typography>
                </Box>
            </Box>
        </Container>
    );
}
