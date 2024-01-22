import React, { useState } from "react";

export default function Homepage() {
//   const RenderInput = () => {
    const [inputValue, setInputValue] = useState("");

    const [inputValuesList, setInputValuesList] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");


    const submit = () => {
      const checkInput = inputValue.trim();

    if (checkInput !== "" && !inputValuesList.includes(checkInput)) {
      const newInputValuesList = [...inputValuesList, checkInput];
      setInputValuesList(newInputValuesList);
      setInputValue("");
    } else {
      alert("Đã tồn tại ở trong danh sách")
    }
  };
    const deleteItem = (valueToDelete) => {
        const updatedList = inputValuesList.filter((value) => value !== valueToDelete);
        setInputValuesList(updatedList);
    }

    const search = () => {
      const filteredList = inputValuesList.filter(
        (value) => value.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setInputValuesList(filteredList);
    };
  
  

    return (
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />                                                           
      
        <button onClick={submit}>Submit</button>
        <input type="text" placeholder="Search"  value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
        <button onClick={search}>Search</button>

        <ul>
        {inputValuesList.map((value, index) => (
          <li key={index}>
            {value}
            <button onClick={() => deleteItem(value)}>Delete</button>
          </li>
        ))}
      </ul>
      </div>
    );
  };
// }
