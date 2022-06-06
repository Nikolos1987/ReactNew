import styles from "./style.module.css"
import { useRef,useEffect } from "react"
import { Route,Routes,useParams,BrowserRouter,NavLink } from 'react-router-dom';
import { Test } from "../test";
export function Chatlist({chat}){
      const chenge=(e)=>{
        document.querySelectorAll('#as').forEach((n)=>n.className=styles.component)

    e.target.className=styles.chenge
    }
    const ref=useRef() 
    let list=<div id="as" key={chat.room} className={styles.component} ref={ref} onClick={chenge}></div>
    
    useEffect(()=>{ },[])
     
    return(     
        <div className={styles.main}> 
         {chat.map((n)=>
        <NavLink className={styles.component}
        style={({isActive})=>{
            return{
                backgroundColor:isActive?"blue":""
            }

        }}
        to={`${n}`}>{n}</NavLink>)}

                  
            </div>
       


    )
}