import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CartItem {
    id: string | number;
    quantity: number;
    // title: string;
    // price: number;
    // image?: string;
}

interface CartState {
    items: CartItem[];
}

const CART_KEY = "cart_items";

const loadCartFromStorage = (): CartItem[] => {
    try {
        const data = localStorage.getItem(CART_KEY);
        return data ? JSON.parse(data) : [];
    } catch (error) {
        console.error("Failed to load cart from storage", error);
        return [];
    }
};

const saveCartToStorage = (items: CartItem[]) => {
    localStorage.setItem(CART_KEY, JSON.stringify(items));
};

const initialState: CartState = {
    items: loadCartFromStorage(),
};


const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        /* ➕ ADD TO CART */
        addToCart: (state, action: PayloadAction<CartItem>) => {
            const existingItem = state.items.find(
                item => item.id === action.payload.id
            );

            if (existingItem) {
                existingItem.quantity = 1;
                // existingItem.quantity += action.payload.quantity || 1;
            }
            else {
                state.items.push({
                    ...action.payload,
                    quantity: action.payload.quantity || 1,
                });
            }

            saveCartToStorage(state.items);
        },

        /* ❌ REMOVE ITEM */
        removeFromCart: (state, action: PayloadAction<string | number>) => {
            state.items = state.items.filter(item => item.id !== action.payload);
            saveCartToStorage(state.items);
        },

        /* ➕ INCREASE QUANTITY */
        increaseQuantity: (state, action: PayloadAction<string | number>) => {
            const item = state.items.find(i => i.id === action.payload);
            if (item) item.quantity += 1;
            saveCartToStorage(state.items);
        },

        /* ➖ DECREASE QUANTITY */
        decreaseQuantity: (state, action: PayloadAction<string | number>) => {
            const item = state.items.find(i => i.id === action.payload);

            if (item) {
                if (item.quantity > 1) {
                    item.quantity -= 1;
                } else {
                    state.items = state.items.filter(i => i.id !== action.payload);
                }
            }

            saveCartToStorage(state.items);
        },

        /* 🧹 CLEAR CART */
        clearCart: (state) => {
            state.items = [];
            saveCartToStorage([]);
        },
    },
});

export const getQuantityById = (
    items: CartItem[],
    id: string | number
) => {
    return items.find(item => item.id === id)?.quantity ?? 0;
};

export const {
    addToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
