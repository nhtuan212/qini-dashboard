import React, { useEffect } from "react";
import Input from "@/components/Input";
import { Box, InputAdornment, Typography } from "@mui/material";
import { AccessTime, AccountCircle, AttachMoney } from "@mui/icons-material";
import { useRevenueStore } from "@/store/useRevenueStore";
import { staffApi, timeSheet } from "@/config/apis";
import { TEXT } from "@/constants/text";

export default function AddNewContent() {
    //** Zustand */
    const { staff, addStaff } = useRevenueStore();

    //** Effects */
    useEffect(() => {
        console.log({ staff });
    }, [staff]);

    return (
        <>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: " center",
                }}
            >
                <Typography>{TEXT.WORK_SHIFT}: Ca 1</Typography>
                <Typography>
                    {TEXT.DATE}: {new Date().toDateString()}
                </Typography>
            </Box>
            <Box
                component="form"
                noValidate
                sx={{
                    display: "grid",
                    my: 3,
                    gridTemplateColumns: { sm: "1fr 1fr 1fr 1fr" },
                    gap: 2,
                }}
            >
                <Input
                    select
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <AccountCircle />
                            </InputAdornment>
                        ),
                    }}
                    label={TEXT.STAFF}
                    data={staffApi}
                    onChange={value => addStaff(value)}
                />
                <Input
                    select
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <AccessTime />
                            </InputAdornment>
                        ),
                    }}
                    label={TEXT.CHECK_IN}
                    data={timeSheet}
                />
                <Input
                    select
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <AccessTime />
                            </InputAdornment>
                        ),
                    }}
                    label={TEXT.CHECK_OUT}
                    data={timeSheet}
                />
                <Input
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <AttachMoney />
                            </InputAdornment>
                        ),
                    }}
                    label={TEXT.REVENUE}
                />
            </Box>
        </>
    );
}
