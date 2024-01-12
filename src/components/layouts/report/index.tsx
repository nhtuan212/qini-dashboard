"use client";
import React from "react";
import DataTable from "../../table/DataTable";
import ButtonComponent from "../../Button";
import ReportColumns from "./ReportColumns";
import { Add } from "@mui/icons-material";
import { Box } from "@mui/material";
import { TEXT } from "@/constants/text";
import { useDialogStore } from "@/store/useDialogStore";
import DialogAddNew from "./addNew";

export default function Report() {
    const rows = [
        { id: "1", lastName: "Snow", firstName: "Jon", age: 35 },
        { id: "2", lastName: "Lannister", firstName: "Cersei", age: 42 },
        { id: "3", lastName: "Lannister", firstName: "Jaime", age: 45 },
        { id: "4", lastName: "Stark", firstName: "Arya", age: 16 },
        { id: "5", lastName: "Targaryen", firstName: "Daenerys", age: null },
        { id: "6", lastName: "Melisandre", firstName: null, age: 150 },
        { id: "7", lastName: "Clifford", firstName: "Ferrara", age: 44 },
        { id: "8", lastName: "Frances", firstName: "Rossini", age: 36 },
        { id: "9", lastName: "Roxie", firstName: "Harvey", age: 65 },
    ];

    //** Zustand */
    const { dialogOpen } = useDialogStore();

    //** Functions */
    const handleClickOpen = () => {
        dialogOpen(true);
    };

    // return <TableComponent headCells={headCells} size="medium" />;
    return (
        <>
            <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                <ButtonComponent
                    variant="contained"
                    sx={{ mb: 2 }}
                    onClick={handleClickOpen}
                >
                    <Add sx={{ mr: 1 }} />
                    {TEXT.ADD_NEW}
                </ButtonComponent>
            </Box>

            <DialogAddNew />

            <DataTable columns={ReportColumns()} rows={rows} />
        </>
    );
}
