import styles from "./style.module.css";
import Button from "@mui/material/Button";
import Input from "@mui/material/Input";
import {Chatlist}  from "../chatlist";
import { Messages } from "./messagelist";
import { useEffect, useState,useRef } from "react";
import { useParams, Route,Routes, NavLink } from "react-router-dom";
import { version } from "react-dom";


export function MessageList() {
const[send,setSend]=useState([])
const style=styles
const [chat,setChat]=useState({
room1 :[],
room2:[],
room3:[] 
}
  )
let a=Object.keys(chat)




  const[input,setInput]=useState('')
 
  const add=()=>{setSend((a)=[...a,{message:input,name:"user",image:2,id:Date.now()}])}
useEffect(()=>{if(send.length>0&&send[send.length-1].name==="user"){
  setTimeout(()=>{ setSend([...send,{message:"robot",name:"robot",image:1,id:Date.now()}])},2000)
 
}},[send])
const ref=useRef()
useEffect(()=>{ref.current?.focus()},[])
let roomId=useParams()
console.log(roomId,'1this');

  return (
    <div className={style.wrapper}>
      <div className={style.chatWrapper}> 
        <Chatlist chat={a}/>
        <Routes>
         <Route path={`:id`} element={<div className={style.main} ><Messages  data={chat}/></div>}>            
          </Route>
        </Routes>
        
</div>
  
      </div>

  );
}
