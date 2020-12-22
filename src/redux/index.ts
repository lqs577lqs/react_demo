import { configureStore } from "@reduxjs/toolkit";
import { unitReducer } from "./unit/unit";

export const store = configureStore({
    reducer:{
        unit: unitReducer
    }
});

export type ReduxState = ReturnType<typeof store.getState>
// export type ReduxDispatch = typeof store.dispatch