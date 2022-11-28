// import { AppState, Product } from "../../interfaces/types";

// type AppActions =
//   | { type: "saveOnLocalStorage" }
//   // | { type: "encryptPassword"; payload: { password: string } }
//   // | { type: "unencryptPassword" }
//   // | { type: "closeSession" }
//   // | { type: "login" }
//   | { type: "setProductsList"; payload: { productsList: Product[] } };

// export const AppReducer = (state: AppState, action: AppActions): AppState => {
//   switch (action.type) {
//     case "saveOnLocalStorage":
//       return { ...state };
//     // case "encryptPassword":
//     //   return { ...state };
//     // case "unencryptPassword":
//     //   return { ...state };
//     // case "closeSession":
//     //   return { ...state };
//     // case "login":
//     //   return { ...state };
//     case "setProductsList":
//       return { ...state, productList: payload };
//     default:
//       return state;
//   }
// };

import React from 'react'