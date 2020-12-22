import { createAction, createReducer } from "@reduxjs/toolkit"

export const add = createAction<number>("add");

const initState = {
    number: 0,
}

export const unitReducer = createReducer(initState, builder=>{
    builder.addCase(add,(state,action) => {
        state.number += action.payload || 1;
    })
});