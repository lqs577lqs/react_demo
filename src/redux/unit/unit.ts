import { createAction, createReducer } from "@reduxjs/toolkit"

export const add = createAction<void>("add");

const initState = {
    number: 0,
}

export const unitReducer = createReducer(initState, builder=>{
    builder.addCase(add,(state,action) => {
        state.number += 1;
        console.log('state',state);
        console.log('action',action);
    })
});