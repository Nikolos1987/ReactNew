export function Message (props){

const data=props.mesages.map((num)=>
<div className="alert alert-success" role="alert">
   Name: {num.user}   Post: {num.post}
 </div> )
return(
    <div>
        {data}
    </div>
)

}