import styles from "./style.module.css"
import { useRef,useEffect } from "react"
import { Route,Routes,useParams,BrowserRouter,NavLink } from 'react-router-dom';

export function Chatlist({chat}){
      const chenge=(e)=>{
        document.querySelectorAll('#as').forEach((n)=>n.className=styles.component)

    e.target.className=styles.chenge
    }
    const ref=useRef() 
    let list=<div id="as" key={chat.room} className={styles.component} ref={ref} onClick={chenge}></div>
    
    useEffect(()=>{ },[])
 
        const params = useParams()
    console.log(params,"dsf");

        

    return( 
    
        <div className={styles.main}> 
        <Routes>
            <Route path="/" element={<h1>select chatroom</h1>}></Route>
            </Routes> 
        {chat.map((n)=>
        <NavLink className={styles.component}
        style={({isActive})=>{
            return{
                backgroundColor:isActive?"blue":""
            }

        }}
        to={`chat/${n.room}`}>{n.room}</NavLink>)}

                  
            </div>
       


    )
}