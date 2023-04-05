import axios from "axios";
import { loginFailure, loginStart, loginSuccess } from "./AuthActions";

export const login = async (user, dispatch) => {
  dispatch(loginStart());
  const baseUrl = process.env.BASE_API_URL;
  const loginUrl = baseUrl + "auth/login"
  console.log("loginCalled url is: ", registerUrl, " userDataIs: ", user)
  try {
    const res = await axios.post("loginUrl", user);
    console.log("login called axiosSuccess res is:", res)
    dispatch(loginSuccess(res.data));
  } catch (err) {
    console.log("login called axios error:", err.response.data)

    dispatch(loginFailure());
  }
};


export const register = async (userData, dispatch, navToLogin) => {
  const baseUrl = process.env.BASE_API_URL;
  const registerUrl = baseUrl + "auth/login"
  try {
    console.log("handleFinish uname is: ", username, " pass is ", password, " url is: ", registerUrl)
    const res = await axios.post(registerUrl, userData);
    // history.push("/login");
    navToLogin()

  } catch (err) {

  }
}