import { useCallback } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { ReduxState } from "..";
import { add } from "./unit"

//#region   Functions
export type Action = Function

export const useUnit = (): ReduxState['unit'] => {
    return useSelector((s: ReduxState) => s.unit)
}

export const useFunctions = ():(()=>{ add:Action }) => {
    const dispatch = useDispatch();
    
    return useCallback(()=>({
        add: (number:number)=>dispatch(add(number))
    }),[dispatch]);
}