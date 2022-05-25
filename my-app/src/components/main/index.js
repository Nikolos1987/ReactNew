import styles from "./style.module.css";
import Button from "@mui/material/Button";
import Input from "@mui/material/Input";
import { Messages } from "./messagelist";
import { useEffect, useState,useRef } from "react";
export function MessageList() {

const style=styles
console.log(style.header);
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
        <div className={style.header}><h1>Super Messanger</h1></div>
        <div className={style.main} ><Messages  data={send}/></div>
      <div className={style.message}>
        <Input className={style.btn} ref={ref} onChange={(e)=>setInput(e.target.value)} fullWidth={true}></Input>
        <Button onClick={add} variant="text" color={"secondary"}>
          отправить
        </Button>
      </div>
    </div>
  );
}
