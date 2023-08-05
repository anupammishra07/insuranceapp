import { handleActions, Action } from "redux-actions";
import * as loginActions from "../actions/userAuthActions";


export type State = {
    isSuccess: boolean;
    isError: boolean;
    message: string;
    authtoken: string;
  };
  const initialState: State = {
    isSuccess: false,
    isError: false,
    message: "",
    authtoken: "",
  };


  
export const loginReducer = handleActions<State, any>(
    {
      [loginActions.Type.LOGIN_SUCESS]: (state: State, action: Action<any>) => {
        return {
          ...state,
          isSuccess: true,
          isError: false,
        //   message: action.payload.message ? (action.payload.message as any) : "",
          authtoken: action.payload.data.token
            ? (action.payload.data.token as any)
            : "",
        };
      },
      [loginActions.Type.LOGIN_REQUEST]: (state: State, action: Action<any>) => {
        return {
          ...state,
          isSuccess: false,
          isError: false,
          message: "",
          authtoken: "",
        };
      },
      [loginActions.Type.LOGIN_FAILURE]: (state: State, action: Action<any>) => {
        return {
          ...state,
          isSuccess: false,
          isError: true,
          message: "",
          authtoken: "",
        };
      },
    },
    initialState
  );
  