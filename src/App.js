import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

const ListOfPeople = [
  { id: 1, age: 30, name: "eddie", nationality: "brazil" },
  { id: 2, age: 28, name: "rafael", nationality: "brazil" },
  { id: 3, age: 30, name: "ardelis", nationality: "china" },
];
const App = () => {
  const [People, setListOfPeople] = useState(ListOfPeople);

  function handleRemoveUser(id) {
    const newList = People.filter((item) => item.id !== id);
    setListOfPeople(newList);
  }
  return (
    <div>
      <ul>
        {People.map((item) => (
          <li key={item.id}>
            <p>
              <strong>Name: </strong>
              {item.name}
            </p>
            <p>
              <strong>Age: </strong>
              {item.age}
            </p>
            <p>
              <strong>Nationality: </strong>
              {item.nationality}
            </p>
            <button type="button" onClick={() => handleRemoveUser(item.id)}>
              Delete User
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;

//         <ListOfPeople ListOfPeople={ListOfPeople} onRemove={handleRemoveUser} />;

//   };
//     const people = ({ListOfPeople, onRemove}) => (
//       <ul>
//         {ListOfPeople.map((item) => (<Item key={item.id} item={item} onRemove={onRemove} />
//     ))}
//   </ul>
// );

//   const Item = ({ item, onRemove }) => (
//   <li>
//     <span>{item.name}</span>
//     <span>{item.age}</span>
//     <span>{item.nationality}</span>
//     <button type="button" onClick={() => onRemove(item.id)}>
//       Remove
//     </button>
//   </li>
