import { loginReducer, State as loginState } from "./userAuthReducers";
import { combineReducers } from "redux";
// import { routerReducer as router, RouterState } from "react-router-redux";
interface StoreEnhancerState {}
export interface RootState extends StoreEnhancerState {
    // router: RouterState;
  login: loginState;

}
const appReducer = combineReducers({
    // router,
    loginReducer: loginReducer,
     });

     
export const rootReducer = (state: any, action: any) => {
    // if (action.type === "USER_LOGOUT") {
    //   storage.removeItem("persist:logged");
    //   return appReducer(undefined, action);
    // }
  
    return appReducer(state, action);
  };
  