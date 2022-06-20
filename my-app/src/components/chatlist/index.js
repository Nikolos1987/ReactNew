import styles from "./style.module.css"
import { useRef,useEffect } from "react"
import { Route,Routes,useParams,BrowserRouter,NavLink, Navigate } from 'react-router-dom';
import { useSelector,useDispatch} from "react-redux";
import {createConversation, deleteConversation} from "../store/conversations"

export function Chatlist({chat,d}){
    const converstation=useSelector((state)=>state.conversation.conversations)

      const chenge=(e)=>{
        document.querySelectorAll('#as').forEach((n)=>n.className=styles.component)

    e.target.className=styles.chenge
    }
    const ref=useRef() 

    let list=<div id="as" key={chat.room} className={styles.component} ref={ref} onClick={chenge}></div>
    
    useEffect(()=>{ },[])
    const dispatch=useDispatch()
    const convroom=()=>{
        const name=prompt("введите название комныты")
        const isValidName=!converstation.includes(name)
        if (!!name&&isValidName){
dispatch(createConversation(name))
        }else{
            alert("нет комнаты")
        }

    }
    const delConversation=(converstation,e)=>{  

dispatch(deleteConversation(converstation));

    }
    console.log(d,' chat')
    return(     
        <div className={styles.main}> 
        <button onClick={convroom}>add room</button>
         {converstation.map((n)=>
        <NavLink  className={styles.component}
        style={({isActive})=>{
            return{
                backgroundColor:isActive?"blue":""
            }

        }}
        to={`${n}`}>{n}</NavLink>)}

                <button onClick={()=> delConversation(d)}>del room</button>  
            </div>
       


    )
}