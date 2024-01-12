import { create } from "zustand";

interface RevenueState {
    staff: any[];
    checkIn: [];
    checkOut: [];
    addStaff: (data: any) => void;
}

export const useRevenueStore = create<RevenueState>()(set => ({
    staff: [],
    checkIn: [],
    checkOut: [],
    addStaff: data =>
        set(state => {
            return { staff: [...state.staff, data] };
        }),
}));
