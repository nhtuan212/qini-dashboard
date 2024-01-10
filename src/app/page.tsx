import React from "react";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { ROUTE } from "@/config/routes";
// import { fetchData } from "@/utils";

export default async function HomePage() {
    const session = await getServerSession();
    if (!session) {
        redirect(ROUTE.LOGIN);
    }

    // await fetchData({
    //     endpoint: "/user",
    // }).then(res => {
    //     console.log({ res: res.data });
    // });

    return <div>HomePage</div>;
}
