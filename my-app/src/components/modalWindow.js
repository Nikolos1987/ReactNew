import { useState,useEffect } from 'react';
import '../components/modalWindow.css'
export function ModalWindow({setvisual,setUsername}){
    const [name,setName]=useState('')
    const addName=(event)=>{
        setName((name)=>name=event.target.value);
    }
const close=()=>{
   setvisual((a)=>a=false) }
const addUser=()=>{
    setUsername((b)=>b=name) }
    return(
        <div>
    <div onClick={close} className='MainWindow'>
</div>
<div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title">Введите Ваше имя</h5>
        <button onClick={close} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <input onChange={addName} type="text" className="form-control" id="formGroupExampleInput" placeholder=""></input>
      </div>
      <div className="modal-footer">
         <button onClick={addUser} type="button" className="btn btn-primary">Сохранить</button>
      </div>
    </div>
  </div>
</div>
    );
}