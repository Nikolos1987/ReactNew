import '../components/firstComponent.css'
export function MyComponent(props) {
const listItems = props.message.map((number) =>
<div className="Message__unit">
<h1>{number.id}</h1>
<h1>{number.text}</h1>
</div>
);
    return (
      <div className="Main_message">
 {listItems}
  
      </div>
    );
  }
  