import {createSlice, PayloadAction} from '@reduxjs/toolkit';


type InitialState ={
    value: AuthState
}

type AuthState = {
    isAuth: boolean,
    userName: string,
    isAdmin: boolean,
    isVendor: boolean,
}

type AuthPayload = {
    userName: string,
    isAdmin?: boolean,
    isVendor?: boolean,
}

const initialState = {
    value : {
        isAuth : false,
        userName: '',
        isAdmin: false,
        isVendor: false,

    }
}

export const auth = createSlice({
    name: 'auth',
    initialState,
    reducers:{
        logOut: () => initialState,
        logIn: (state, action: PayloadAction<AuthPayload>) => {
           return {
            value: {
                isAuth: true,
                userName: action.payload.userName,
                isAdmin: action.payload.isAdmin || false,
                isVendor: action.payload.isVendor || false,
            }
           }
        },
        toggleAdmin: (state) => {
            state.value.isAdmin = !state.value.isAdmin;
        }
    }
})


export const {logOut, logIn, toggleAdmin} = auth.actions;
export default auth.reducer;