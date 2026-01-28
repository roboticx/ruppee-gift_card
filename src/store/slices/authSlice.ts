import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
    isLoggedIn: boolean;
    token: string | null;
    isLoginModalOpen: boolean;
    isSignupModalOpen: boolean;
    user: any;
}

const initialState: AuthState = {
    isLoggedIn: false,
    token: null,
    isLoginModalOpen: false,
    isSignupModalOpen: false,
    user: null
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        getAuthRedux(state) {
            state.token = localStorage.getItem('token');
            state.isLoggedIn = !!state.token;

            try {
                const userString = localStorage.getItem('user');
                state.user = userString ? JSON.parse(userString) : null;
            }
            catch (error) {
                console.error('Invalid user JSON in localStorage', error);
                state.user = null;
            }
        },
        loginSuccess(state, action: PayloadAction<string>) {
            state.isLoggedIn = true;
            state.token = action.payload;
            state.isLoginModalOpen = false;
        },
        logout(state) {
            state.isLoggedIn = false;
            state.token = null;
            state.user = null;
            localStorage.removeItem('token');
            localStorage.removeItem('user');
        },
        setLoginModal(state, action: PayloadAction<boolean>) {
            state.isLoginModalOpen = action.payload
        },
        setSigninModal(state, action: PayloadAction<boolean>) {
            state.isSignupModalOpen = action.payload
        },
        setUser(state, action: PayloadAction<any>) {
            state.user = action.payload
        },
    },
});

export const { loginSuccess, logout, setLoginModal, setUser, getAuthRedux, setSigninModal } = authSlice.actions;

export default authSlice.reducer;
