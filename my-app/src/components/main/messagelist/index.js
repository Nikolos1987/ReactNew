import Avatar from '@mui/material/Avatar';
import './stile.css'
export function Messages({data}){

  const messageData=data.map((n)=>
<div  className='messageBlock'>
  <Avatar alt="Remy Sharp" src={`image/${n.image}.jpg`} />
    <div className='messageList'>
        { n.message}</div></div>
  
 )

    return(

    <div className='main'>
        {messageData}</div>
    )
}