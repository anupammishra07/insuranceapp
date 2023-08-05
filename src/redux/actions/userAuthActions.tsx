import * as api from "../../services/api";
import {loginUrl , registerUrl} from "../../constants/constants";


export const Type = {
    LOGIN_SUCESS: "LOGIN_SUCESS",
    LOGIN_REQUEST: "LOGIN_REQUEST",
    LOGIN_FAILURE: "LOGIN_FAILURE",
}

function login(userobj: any) {
    const data = JSON.stringify({
      email: userobj.email,
      password: userobj.password,
     
    });
    const headers = {};
    return api.postApi(loginUrl ,"POST" , headers,data );
    // return api.api(loginviaotpUrl, "POST", headers, data);
  }

  export const loginApi = (data: any) => async (dispatch: any) => {
    login(data)
      .then((response) => response.json())
      .then((response) => {
        if (response.code == 200) {
          dispatch({ type: Type.LOGIN_SUCESS, payload: response });
        } else {
          dispatch({ type: Type.LOGIN_FAILURE });
        }
      });
  };