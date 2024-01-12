import React from "react";
import ButtonComponent from "@/components/Button";
import DialogComponent from "@/components/Dialog";
import AddNewContent from "./AddNewContent";
import { useDialogStore } from "@/store/useDialogStore";
import { TEXT } from "@/constants/text";

export default function DialogAddNew() {
    //** Zustand */
    const { isDialogOpen } = useDialogStore();

    //** Functions */
    const handleSubmit = () => {
        console.log("handleSubmit");
    };

    return (
        <DialogComponent open={isDialogOpen} title={TEXT.ADD_REPORT}>
            <DialogComponent.Content>
                <AddNewContent />
            </DialogComponent.Content>

            <DialogComponent.Action>
                <ButtonComponent autoFocus onClick={handleSubmit}>
                    {TEXT.SAVE}
                </ButtonComponent>
            </DialogComponent.Action>
        </DialogComponent>
    );
}
