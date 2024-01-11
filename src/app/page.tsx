import React from "react";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { ROUTE } from "@/config/routes";

export default async function HomePage() {
    const session = await getServerSession();
    if (!session) {
        redirect(ROUTE.LOGIN);
    }

    return <div>HomePage</div>;
}
