import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const AUTH_ENDPOINT = 'http://localhost:8080/auth';

const initialState = {
    status: "",
    error: "",
    user: {
        id: "",
        name: "",
        email: "",
        picture: "",
        status: "",
        token: "",
    },
};

export const registerUser = createAsyncThunk(
    "auth/register",
    async (values, { rejectWithValue }) => {
        try {
            const { data } = await axios.post(`${AUTH_ENDPOINT}/register`, {
                ...values,
            });
            //console.log(data)
            if (data.error) {
                console.log(data.error)
                return rejectWithValue(data.error.message);
            }
            return data;
            // fetch('http://localhost:8080/auth/hi')
            //     .then((data) => {
            //         console.log(data.json())
            //         //console.log(data)
            //     })
        } catch (error) {
            console.log("error", error)
            return rejectWithValue(error.response.data.error.message);
        }
    }
);

export const loginUser = createAsyncThunk(
    "auth/login",
    async (values, { rejectWithValue }) => {
        try {
            const { data } = await axios.post(`${AUTH_ENDPOINT}/login`, {
                ...values,
            });
            if (data.error) {
                console.log(data.error)
                return rejectWithValue(data.error.message);
            }
            return data;
        } catch (error) {
            return rejectWithValue(error.response.data.error.message);
        }
    }
);

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        logout: (state) => {
            state.status = "";
            state.error = "";
            state.user = {
                id: "",
                name: "",
                email: "",
                picture: "",
                status: "",
                token: "",
            };
        },
        changeStatus: (state, action) => {
            state.status = action.payload;
        },
        errorReducer: (state, action) => {
            state.error = '';
        }
    },
    extraReducers(builder) {
        builder
            .addCase(registerUser.pending, (state, action) => {
                //console.log("hello")
                state.status = "loading";
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                console.log("fulfilled", action)
                state.status = "succeeded";
                state.error = "";
                state.user = action.payload.user;
            })
            .addCase(registerUser.rejected, (state, action) => {
                console.log("rejected", action)
                state.status = "failed";
                state.error = action.payload;
            })
            .addCase(loginUser.pending, (state, action) => {
                state.status = "loading";
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                console.log("login fulfilled", action)
                state.status = "succeeded";
                state.error = "";
                state.user = action.payload.user;
            })
            .addCase(loginUser.rejected, (state, action) => {
                console.log("login rejected", action)
                state.status = "failed";
                state.error = action.payload;
            });
    }
})


export const { logout, changeStatus, errorReducer } = userSlice.actions;

export default userSlice.reducer;
