import Avatar from '@mui/material/Avatar';
import stile  from "../style.module.css"
import { Route,Routes,useParams,BrowserRouter,Link } from 'react-router-dom';
import { useSelector,useDispatch} from "react-redux";
import styles from "../style.module.css";
import Input from "@mui/material/Input";
import { useEffect, useState,useRef } from "react";
import Button from "@mui/material/Button";

export function Messages({data,getData}){
    let {id}=useParams() 
  const converstation=useSelector((state)=>state.conversation.conversations)
  const msg=useSelector((state)=>state.messages.messages[id])
console.log(msg);
  const style=styles
  const[input,setInput]=useState('')


  const ref=useRef()
  useEffect(()=>{ref.current?.focus()},[])
 const[msgData,setmsgData]=useState(data)
 const add=()=>{
  setmsgData((a)=>({...a,[id]:[
    ...(a[id]??[]),
    {message:input,name:"robot",image:1,id:Date.now()}]}))

 } 
 getData(id)
  
    return(
    <div key={data.id} className='main'>
      <h1>{msg.map((a)=><h1>{a.message??<span>sss</span>}</h1>)}</h1>
    {converstation.map(a=><h1 key={id}>{}</h1>)}
     <div className={style.message}>        
        <Input className={style.btn} ref={ref}  onChange={(e)=>setInput(e.target.value)} fullWidth={true}></Input>
        <Button onClick={add}  variant="text" color={"secondary"}>
          отправить
        </Button>
        </div>
     
        </div>
    )
}