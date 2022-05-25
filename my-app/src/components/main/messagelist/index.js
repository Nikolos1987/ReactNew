import Avatar from '@mui/material/Avatar';
import './stile.css'
export function Messages({data}){
console.log(data);
  const messageData=data.map((n,index=data.id)=>
<div key={index} className='messageBlock'>
  <Avatar   alt="Remy Sharp" src={`image/${n.image}.jpg`} />
    <div  className='messageList'>
        { n.message}</div></div>
  
 )

    return(

    <div key={data.id} className='main'>
        {messageData}</div>
    )
}