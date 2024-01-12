"use client";
import React from "react";
import { DataGrid } from "@mui/x-data-grid";

export default function DataTable({ ...props }: any) {
    return (
        <DataGrid
            initialState={{
                pagination: {
                    paginationModel: { page: 0, pageSize: 5 },
                },
            }}
            pageSizeOptions={[5, 10]}
            sx={theme => ({
                // Remove border when hover header cell
                "& .MuiDataGrid-iconSeparator": {
                    display: "none",
                },
                "& .MuiDataGrid-columnHeader": {
                    backgroundColor: theme.palette.greyCustom,
                },
                "& .MuiDataGrid-cell": {
                    textAlign: "center",
                    whiteSpace: "normal !important",
                },
                ...props.sx,
            })}
            getRowId={(row: any) => row.id}
            // checkboxSelection
            disableColumnMenu
            disableRowSelectionOnClick
            {...props}
        />
    );
}
