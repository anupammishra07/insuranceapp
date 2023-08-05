

import todoReducer from "./slices/todoSlices"
import loginReducer from "./slices/userSlice"
import { configureStore } from '@reduxjs/toolkit';
export const store = configureStore({
  reducer:{
    todoss:todoReducer,
    login:loginReducer
  }
});
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

// // import { combineReducers, createStore } from 'redux';
// // import { loginReducer } from './reducers/userAuthReducers';
// // // import { demoReducer } from './demo/reducer';
// // // import { IDemoState } from './demo/types';
// // export interface IRootState {
// //     demo: IDemoState
// // }
// // const store = createStore<IRootState, any, any, any>(
// //     combineReducers({
// //         login: loginReducer
// // }));


// // export const store = createStore({
// //   combineReducers({
// //             login: loginReducer
// //     })
// // });



// import { createStore, applyMiddleware, compose } from "redux";
// // import { routerMiddleware as createRouterMiddleware } from "react-router-redux";
// // import { createBrowserHistory } from "history";
// import { rootReducer, RootState } from "../redux/reducers/index";
// // export const history = createBrowserHistory();
// // export const routerMiddleware = createRouterMiddleware(history);
// function configureStore(initialState?: RootState) {
//   // configure middlewares
//   // const middlewares = [routerMiddleware];
//   // compose enhancers
//   // const enhancer = compose(applyMiddleware(...middlewares));
//   // create store
//   // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
//   return createStore(rootReducer);
// }
// const store = configureStore();
// // export default store;
// export type AppDispatch = typeof store.dispatch;
// export type RootState = ReturnType<typeof store.getState>;