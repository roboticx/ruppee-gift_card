import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
    isLoggedIn: boolean;
    token: string | null;
    isLoginModalOpen: boolean;
    isSignupModalOpen: boolean;
    user: any;
    role: string | null;
    authLoaded: boolean;
    isUserVerified: boolean;
}

const initialState: AuthState = {
    isLoggedIn: false,
    token: null,
    isLoginModalOpen: false,
    isSignupModalOpen: false,
    user: null,
    role: null,
    authLoaded: false,
    isUserVerified: false
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        getAuthRedux(state) {
            state.token = localStorage.getItem('token');
            state.isLoggedIn = !!state.token;
            state.role = localStorage.getItem('role');
            state.isUserVerified = (localStorage.getItem('isUserVerified') === 'true') ? true : false;
            state.authLoaded = true;

            try {
                const userString = localStorage.getItem('user');
                state.user = userString ? JSON.parse(userString) : null;
            }
            catch (error) {
                console.error('Invalid user JSON in localStorage', error);
                state.user = null;
            }
        },
        loginSuccess(state, action: PayloadAction<any>) {
            localStorage.setItem("token", action.payload.token);
            localStorage.setItem("user", JSON.stringify(action.payload.user));
            localStorage.setItem("role", action.payload.user.role);
            localStorage.setItem("isUserVerified", action.payload.user.isUserVerified);

            state.isLoggedIn = true;
            state.token = action.payload.token;
            state.user = action.payload.user;
            state.role = action.payload.user.role;
            state.isUserVerified = action.payload.user.isUserVerified;
            state.isLoginModalOpen = false;

            if (!state.isUserVerified) {
                state.isSignupModalOpen = true;
            }

        },
        logout(state) {
            state.isLoggedIn = false;
            state.token = null;
            state.user = null;
            state.role = null;
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            localStorage.removeItem('role');
            localStorage.removeItem('isUserVerified');
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
        setRole(state, action: PayloadAction<any>) {
            state.role = action.payload
        },
        setIsUserVerified(state, action: PayloadAction<any>) {
            state.isUserVerified = action.payload
        },
    },
});

export const {
    loginSuccess,
    logout,
    setLoginModal,
    setUser,
    getAuthRedux,
    setSigninModal,
    setRole,
    setIsUserVerified
} = authSlice.actions;

export default authSlice.reducer;