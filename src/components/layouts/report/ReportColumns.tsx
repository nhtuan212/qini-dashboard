import React from "react";
import ButtonComponent from "@/components/Button";
import { GridColDef, GridRenderEditCellParams } from "@mui/x-data-grid";
import { TEXT } from "@/constants/text";

export default function ReportColumns() {
    const handleSubmit = (event: React.BaseSyntheticEvent, id: string) => {
        console.log(id);
        return event.stopPropagation();
    };

    const columns: GridColDef[] = [
        {
            field: "firstName",
            headerName: TEXT.NAME,
            minWidth: 100,
            flex: 1,
            sortable: false,
            filterable: false,
        },
        {
            field: "lastName",
            headerName: TEXT.CASH,
            minWidth: 100,
            flex: 1,
            sortable: false,
            filterable: false,
        },
        {
            field: "age",
            headerName: TEXT.TOTAL,
            type: "number",
            // width: 90,
            minWidth: 100,
            flex: 1,
            sortable: false,
            filterable: false,
        },
        {
            field: "",
            minWidth: 200,
            align: "right",
            flex: 1,
            sortable: false,
            filterable: false,
            renderCell: (params: GridRenderEditCellParams) => {
                return (
                    <ButtonComponent
                        onClick={event =>
                            handleSubmit(event, params.id as string)
                        }
                    >
                        {TEXT.SUBMIT_SHIFT}
                    </ButtonComponent>
                );
            },
        },
    ];

    return columns;
}
