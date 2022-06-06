import { NavLink } from "react-router-dom"

const menu=[
    {title:"Home", to:"/"},
    {title:"Chat", to:"/chat"},
    {title:"Profile", to:"/profile"},
    
]
export function Header(){
    return(
        <div>       

            {menu.map((item)=><li key={item.title}><NavLink to={item.to}>{item.title}</NavLink></li>)}
                </div>
    )
}