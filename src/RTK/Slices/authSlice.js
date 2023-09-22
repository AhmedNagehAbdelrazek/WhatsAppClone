import { createSlice } from "@reduxjs/toolkit";
import axios from "../../utils/axios";
import { AddSnackBar } from "./appSlice";
import { clearSocket } from "../../Socket";
import { clearUserData } from "./userSlice";

const initialState = {
  isLoggedIn: false,
  token: "",
  isLoading: false,
  email: "",
  error: false,
};

const authSlice = createSlice({
  initialState,
  name: "auth",
  reducers: {
    updateIsLoading: (state, action) => {
      state.error = action.payload.error;
      state.isLoading = action.payload.isLoading;
    },
    logIn(state, action) {
      state.isLoggedIn = action.payload.isLoggedIn;
      state.token = action.payload.token;
    },
    signOut(state) {
      clearSocket();
      state.isLoggedIn = false;
      state.token = "";
      state.email = "";
      state.error = false;
    },
    updateRegisterEmail: (state, action) => {
      state.email = action.payload.email;
    },
  },
});

//Reducer
const { logIn, signOut, updateIsLoading, updateRegisterEmail } =
  authSlice.actions;
export default authSlice.reducer;

// log in

export function LoginUser(formValues) {
  return async (dispatch, getState) => {
    dispatch(updateIsLoading({ isLoading: true, error: false }));
    await axios
      .post(
        "auth/login",
        { email: formValues.email, password: formValues.password },
        { headers: { "Content-Type": "application/json" } }
      )
      .then((response) => {
        console.log(response);
        dispatch(
          logIn({
            isLoggedIn: true,
            token: response.data.token,
          })
        );
        dispatch(
          AddSnackBar({
            message: response.data.message,
            severity: response.data.status,
          })
        );
        window.localStorage.setItem("user_id", response.data.user_id);
      })
      .catch((params) => {
        console.log(params);
        dispatch(
          AddSnackBar({
            message: params.message,
            severity: params.status,
          })
        );
      })
      .finally(() => {
        dispatch(updateIsLoading({ isLoading: false, error: false }));
      });
  };
}
export function LogOutUser() {
  return async (dispatch, getState) => {
    dispatch(signOut());
    window.localStorage.removeItem("user_id");
    dispatch(
      AddSnackBar({ message: "Logged Out Successfully", severity: "success" })
    );
    dispatch(clearUserData());
  };
}
export function ForgotPasswordUser(formValues) {
  return async (dispatch, getState) => {
    dispatch(updateIsLoading({ isLoading: true, error: false }));
    await axios
      .post(
        "auth/forgot-password",
        { email: formValues.email },
        { headers: { "Content-Type": "application/json" } }
      )
      .then((response) => {
        dispatch(
          AddSnackBar({
            message: response.data.message,
            severity: response.data.status,
          })
        );
      })
      .catch((params) => {
        dispatch(
          AddSnackBar({
            message: params.message,
            severity: params.status,
          })
        );
      })
      .finally(() => {
        dispatch(updateIsLoading({ isLoading: false, error: false }));
      });
  };
}
export function ResetPasswordUser(formValues) {
  return async (dispatch, getState) => {
    dispatch(updateIsLoading({ isLoading: true, error: false }));
    await axios
      .post(
        "auth/reset-password",
        { ...formValues },
        { headers: { "Content-Type": "application/json" } }
      )
      .then((response) => {
        dispatch(logIn({ isLoggedIn: true, token: response.data.token }));
        dispatch(
          AddSnackBar({
            message: response.data.message,
            severity: response.data.status,
          })
        );
      })
      .catch((params) => {
        dispatch(
          AddSnackBar({
            message: params.message,
            severity: params.status,
          })
        );
      })
      .finally(() => {
        dispatch(updateIsLoading({ isLoading: false, error: false }));
      });
  };
}
export function SignUpUser(formValues) {
  return async (dispatch, getState) => {
    dispatch(updateIsLoading({ isLoading: true, error: false }));

    return await axios
      .post(
        "auth/register",
        { ...formValues },
        { headers: { "Content-Type": "application/json" } }
      )
      .then((response) => {
        dispatch(updateRegisterEmail({ email: formValues.email }));
        dispatch(updateIsLoading({ isLoading: false, error: false }));
        dispatch(
          AddSnackBar({
            message: response.data.message,
            severity: response.data.status,
          })
        );
      })
      .catch((params) => {
        console.log(params);
        dispatch(updateIsLoading({ isLoading: false, error: true }));
        dispatch(
          AddSnackBar({
            message: params.message,
            severity: params.status,
          })
        );
      })
      .finally(() => {
        if (!getState().auth.error) {
          window.location.href = "/auth/send-otp";
        }
      });
  };
}
export function VerifyOTP(formValues) {
  return async (dispatch, getState) => {
    dispatch(updateIsLoading({ isLoading: true, error: false }));
    await axios
      .post(
        "auth/verify-opt",
        { ...formValues },
        { headers: { "Content-Type": "application/json" } }
      )
      .then((response) => {
        dispatch(
          AddSnackBar({
            message: response.data.message,
            severity: response.data.status,
          })
        );
        dispatch(
          logIn({
            isLoggedIn: true,
            token: response.data.token,
          })
        );
        window.localStorage.setItem("user_id", response.data.user_id);
      })
      .catch((params) => {
        dispatch(
          AddSnackBar({
            message: params.message,
            severity: params.status,
          })
        );
      })
      .finally(() => {
        dispatch(updateIsLoading({ isLoading: false, error: false }));
      });
  };
}
