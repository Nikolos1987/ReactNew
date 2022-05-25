import Avatar from '@mui/material/Avatar';
import stile  from './stile.module.css'

export function Messages({data}){
console.log(data);
  const messageData=data.map((n,index=data.id)=>
<div key={index} className={stile.messageBlock}>
  <Avatar   alt="Remy Sharp" src={`image/${n.image}.jpg`} />
    <div  className={stile.messageList}>
        { n.message}</div></div>
  
 )

    return(

    <div key={data.id} className='main'>
        {messageData}</div>
    )
}