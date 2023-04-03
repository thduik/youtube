import axios from "axios";
import { loginFailure, loginStart, loginSuccess } from "./AuthActions";

export const login = async (user, dispatch) => {
  dispatch(loginStart());
  try {
    const res = await axios.post("/api/auth/login", user);
    console.log("login called axiosSuccess res is:", res)
    dispatch(loginSuccess(res.data));
  } catch (err) {
    console.log("login called axios error:", err.response.data)

    dispatch(loginFailure());
  }
};


export const register = async (user, dispatch) => {
  
}