import "./App.css";
import { MyComponent } from "./components/firstComponen.js";

function App() {
  return (
    <div className="App">
      <MyComponent message={[{id:1,text:"hello"},{id:1,text:"how are you"},{id:1,text:"I see you"}]} />
    </div>
  );
}

export default App;
