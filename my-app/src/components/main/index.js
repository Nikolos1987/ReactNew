import styles from "./style.module.css";
import Button from "@mui/material/Button";
import Input from "@mui/material/Input";
import {Chatlist}  from "../chatlist";
import { Messages } from "./messagelist";
import { useEffect, useState,useRef } from "react";
import { useParams } from "react-router-dom";
export function MessageList() {
  let a=useParams()
  console.log(a,"d");
const style=styles
const [chat,setChat]=useState([
    {room:"room1",message:"adad",image:1},
{room:"room2",message:"zxczczz2",image:1},
{room:"room3",message:"zxczczz3",image:1}])
  const[input,setInput]=useState('')
  const[send,setSend]=useState([])
  const add=()=>{setSend((a)=>[...a,{message:input,name:"user",image:2,id:Date.now()}])}
useEffect(()=>{if(send.length>0&&send[send.length-1].name==="user"){
  setTimeout(()=>{ setSend([...send,{message:"robot",name:"robot",image:1,id:Date.now()}])},2000)
 
}},[send])
const ref=useRef()
useEffect(()=>{ref.current?.focus()},[])
  return (
    <div className={style.wrapper}>
      <div className={style.chatWrapper}>  
        <Chatlist chat={chat}/>
        <div className={style.main} ><Messages  data={chat}/></div>
</div>
      <div className={style.message}>        
        <Input className={style.btn} ref={ref} onChange={(e)=>setInput(e.target.value)} fullWidth={true}></Input>
        <Button onClick={add} variant="text" color={"secondary"}>
          отправить
        </Button>
      </div>
    </div>
  );
}
