export const fetchData = async ({
    endpoint,
    options,
}: {
    endpoint: string | URL;
    options?: RequestInit;
}): Promise<any> => {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

    return await fetch(`${baseUrl}${endpoint}`, {
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        ...options,
    })
        .then(res => res.json())
        .catch(() => {
            throw new Error("Failed to fetch data");
        });
};
