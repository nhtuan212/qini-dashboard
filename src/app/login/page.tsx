import React from "react";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import Login from "@/components/layouts/Login";

export default async function LoginPage() {
    const session = await getServerSession();

    if (session) {
        redirect("/");
    }
    return <Login />;
}
