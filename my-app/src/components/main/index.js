import "./style.css";
import Button from "@mui/material/Button";
import Input from "@mui/material/Input";
import { Messages } from "./messagelist";
import { useEffect, useState,useRef } from "react";
export function MessageList() {


  const[input,setInput]=useState('')
  const[send,setSend]=useState([])
  const add=()=>{setSend((a)=>[...a,{message:input,name:"user",image:2,id:Date.now()}])}
useEffect(()=>{if(send.length>0&&send[send.length-1].name==="user"){
  setTimeout(()=>{ setSend([...send,{message:"robot",name:"robot",image:1,id:Date.now()}])},2000)
 
}},[send])
const ref=useRef()
useEffect(()=>{ref.current?.focus()},[])
  return (
    <div className="wrapper">
        <div className="header"><h1>Super Messanger</h1></div>
        <div className="main" ><Messages key={send.id} data={send}/></div>
      <div className="message">
        <Input className="btn" ref={ref} onChange={(e)=>setInput(e.target.value)} fullWidth={true}></Input>
        <Button onClick={add} variant="text" color={"secondary"}>
          отправить
        </Button>
      </div>
    </div>
  );
}
