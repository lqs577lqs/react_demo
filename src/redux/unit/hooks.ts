import React, { useCallback } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { ReduxState } from "..";
import { add } from "./unit"

export const useUnit = (): ReduxState['unit'] => {
    return useSelector((s: ReduxState) => s.unit)
}

export const useFunctions = ():(()=>{ add:any }) => {
    const dispatch = useDispatch();
    return useCallback(()=>({
        add: ()=>dispatch(add())
    }),[dispatch]);
}