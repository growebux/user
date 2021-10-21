import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

const ListOfPeople = [
  {id:1, age: 30, name: "eddie", nationality: "brazil" },
  {id:2, age: 28, name: "rafael", nationality: "brazil" },
  {id:3, age: 30, name: "ardelis", nationality: "china" },
]
const App = () =>{
    const [People, setListOfPeople] = useState(ListOfPeople)
    
    function handleRemoveUser(id){
        const newList = People.filter((item) => item.id !== id);
        setListOfPeople(newList);
    }
    return(
        <ul>
            {People.map((item) => (
            <li key={item.id}>
          <span>{item.age}</span>
          <span>{item.name}</span>
          <span>{item.nationality}</span>
          <button type="button" onClick={() => handleRemoveUser(item.id)}>Delete User</button>
        </li>
      ))}
        </ul>
    );
};

export default App;
