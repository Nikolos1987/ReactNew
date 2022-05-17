import "../components/firstComponent.css";
import { useState, useEffect } from "react";
import { ModalWindow } from "./modalWindow.js";
import { Message } from "./messages";

export function MyComponent(props) {

  const [count,setcount]=useState("")
  const [visual, setvisual] = useState(true); 
  const [username, setUsername] = useState("Noname");
  let [messages, setMessages] = useState([]);
  const [visualSpinner,setvisualSpinner]=useState(false)

  useEffect(() => {
    if (messages.length > 0 && messages[messages.length - 1].user !== "Robot") {
      setvisualSpinner((a)=>a=true)
      function add() { 
        setvisualSpinner((a)=>a=false)
        setMessages([...messages, { post: "bot", user: "Robot" }]);
      }
      setTimeout(add, 1000);
    }
  }, [messages]);
  const messagePush = () => {
if(count){  setMessages([...messages,{post:count,user:username}]);
    setcount("")}
    };
  const buttonChange = (event) => {
    setcount (event.target.value) 
  };
  return (
    <div className="Main_message">
      {visual && (
        <ModalWindow setvisual={setvisual} setUsername={setUsername} />
      )}
      {!visual && <h1>привет, {username}</h1>}
      <form className="row g-12">
        <div className="mb-3 ">
          <input 
          value={count}        
            onChange={buttonChange}
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="enter message"
          ></input>
        </div>
        <div className="col-auto">
          <button
            onClick={messagePush}
            type="button"
            className="btn btn-success"
          >
            Success
          </button>
        </div>
      </form>
      {messages && <Message mesages={messages} />}
 { visualSpinner &&<div className="spinner-border" role="status">
<span class="sr-only"></span>
</div>}
    </div>
  );
}
