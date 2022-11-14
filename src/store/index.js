import { configureStore } from "@reduxjs/toolkit";
import { reducerMain } from "../reducers";

export const store = configureStore({reducerMain})