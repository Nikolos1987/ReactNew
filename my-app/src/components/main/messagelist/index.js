import Avatar from '@mui/material/Avatar';
import stile  from "../style.module.css"
import { Route,Routes,useParams,BrowserRouter,Link } from 'react-router-dom';
import { Test } from '../../test';
import styles from "../style.module.css";
import Input from "@mui/material/Input";
import { useEffect, useState,useRef } from "react";
import Button from "@mui/material/Button";

export function Messages({data}){
  const style=styles
  const[input,setInput]=useState('')
  console.log(input);
  let {id}=useParams()
  const ref=useRef()
  useEffect(()=>{ref.current?.focus()},[])
 const[msgData,setmsgData]=useState(data)
 const add=()=>{
  setmsgData((a)=>({...a,[id]:[{message:input,name:"robot",image:1,id:Date.now()}]}))

 }
console.log(msgData[id][0].message);


  
    return(
    <div key={data.id} className='main'>
      <h1>{msgData[id].map(a=><h1>{a.message}</h1>)}</h1>
     <div className={style.message}>        
        <Input className={style.btn} ref={ref}  onChange={(e)=>setInput(e.target.value)} fullWidth={true}></Input>
        <Button onClick={add}  variant="text" color={"secondary"}>
          отправить
        </Button>
        </div>
     
        </div>
    )
}