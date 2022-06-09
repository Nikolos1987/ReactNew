import { TOOGLE_VISIBLE_PROFILE } from "./types";

const intialState={
    firstName:"Nikita",
    lastName:"Malyshev",
    isvisible:true,
}
export const profileReducer=(state=intialState,action)=>{
switch(action.type){
    case TOOGLE_VISIBLE_PROFILE:
    return {...state,isvisible:!state.isvisible}
    default:
        return state;
}

}