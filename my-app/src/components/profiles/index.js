import { useSelector,useDispatch } from "react-redux"
import {toggleVisibleProfile} from "../store/profile"

export function Profile (){
    const s =useSelector((state)=>state.profiles)
    const dispatch=useDispatch()
    console.log(s);
    return(<div>
        <button onClick={()=>dispatch(toggleVisibleProfile())}>profile</button>
          {s.isvisible&&<div>
        <h1> {s.firstName}</h1>
        <h1> {s.lastName}</h1>
    </div>}
    </div>
  
    

    )
}
    