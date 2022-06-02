import { Route,Routes,useParams,BrowserRouter,NavLink } from 'react-router-dom';
export function Test(){
 let a=useParams()
 console.log(a);
    return(
        <div>
        <NavLink to={"gaga"}>sfs</NavLink>
        <h1>dfS</h1>
</div>
    )
        
    
}