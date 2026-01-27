import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
    isLoggedIn: boolean;
    token: string | null;
    isLoginModalOpen: boolean;
}

const initialState: AuthState = {
    isLoggedIn: false,
    token: null,
    isLoginModalOpen: false,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        loginSuccess(state, action: PayloadAction<string>) {
            state.isLoggedIn = true;
            state.token = action.payload;
            state.isLoginModalOpen = false;
        },
        logout(state) {
            state.isLoggedIn = false;
            state.token = null;
        },
        setLoginModal(state, action: PayloadAction<boolean>) {
            state.isLoginModalOpen = action.payload
        }
    },
});

export const { loginSuccess, logout, setLoginModal } = authSlice.actions;

export default authSlice.reducer;
