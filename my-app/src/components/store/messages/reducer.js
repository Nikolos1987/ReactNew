import {} from "./types";
import { nanoid} from 'nanoid'

const intialState={
messages:{
    room1:[
        {message:"robot",name:"robot",image:1,id:nanoid()}
    ],
    room2:[
        {message:"here",name:"robot",image:1,id:nanoid()}
    ],
    room3:[
      
    ],
}
}
export const messagesReducer=(state=intialState,action)=>{
switch(action.type){
    default:
        return state;
}
}

