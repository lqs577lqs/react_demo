const CHANGE_NUMBER = "CHANGE_NUMBER";

export const changeNumber = (data: number) => ({
    type: CHANGE_NUMBER,
    payload: data
});

// 初始状态
const initialState = {
    number: 0
};

const numberReducer = (state = initialState, action:any) =>{
    switch(action){
        case CHANGE_NUMBER:
            return {
                ...state,
                number: action.payload
            }
        default:
            return state;
    }
}

export default numberReducer;