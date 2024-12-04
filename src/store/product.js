import { create } from "zustand";

export const useProduct = create((set, get) => ({
    product: [],
    productList: async(color) => {
        const res = await fetch(`https://64f5e3672b07270f705dda32.mockapi.io/sneakers${color}`)
        set({ product: await res.json() })
    }
}))