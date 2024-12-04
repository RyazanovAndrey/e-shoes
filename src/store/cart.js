import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

export const useCart = create(persist((set, get) => ({
      cart: [],
      addToCart: (product) => {
        const { cart } = get()
        const findProduct = cart.some(item => item.id == product.id && item.size == product.size)
        const toCart = findProduct ? cart.map(item => item.id == product.id && item.size == product.size ? {...item, count: item.count + 1} : item) : [...cart, product]
        set({ cart: toCart })
      },
      deleteProduct: (id, size) => {
        const { cart } = get()
        const deletePlus = id + size
        const toCart = cart.filter(item => (item.id + item.size) != deletePlus)
        set({ cart: toCart })
      },
      countPlus: (id, size) => {
        const { cart } = get()
        const countPlusProd = cart.map(item => item.id == id && item.size == size ? {...item, count: item.count + 1} : item)
        set({ cart: countPlusProd })
      },
      countMinus: (id, size) => {
        const { cart } = get()
        const countPlusProd = cart.map(item => item.id == id && item.size == size ? {...item, count: item.count == 1 ? item.count = 1 : item.count - 1} : item)
        set({ cart: countPlusProd })
      },
      clearCart: () => {
        set({ cart: [] })
      }
    }),
    {
      name: 'cart',
      storage: createJSONStorage(() => localStorage),
    },
  ),
)