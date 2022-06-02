import Avatar from '@mui/material/Avatar';
import stile  from './stile.module.css'
import { Route,Routes,useParams,BrowserRouter,Link } from 'react-router-dom';

export function Messages({data}){
let a=useParams()
console.log(a,"dfsfss");

    return(
    <div key={data.id} className='main'>
          <Routes>
            {data.map(n=><Route path={`chat/${n.room}`} key={n.room} element={<h1>{<div key={n.room} className={stile.messageBlock}>
  <Avatar   alt="Remy Sharp" src={`/image/${n.image}.jpg`} />
    <div  className={stile.messageList}>
        { n.message}</div></div>}</h1>}></Route>)}
           
        </Routes>
        </div>
    )
}