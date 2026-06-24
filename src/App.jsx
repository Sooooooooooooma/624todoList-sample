import { useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("");

  const [todos, setTodos] = useState([]);

  const handleInput = (e) => {
    setText(e.target.value);
  };

  const handleAdd =()=>{
    setTodos([...todos,text]);
    console.log(todos);
    setText("");
  }


  return (
    <>
      <h1>TodoList</h1>
      <input onChange={handleInput} value={text} placeholder="文字入れて!" />
      <button onClick={handleAdd}>追加</button>
      <ul>
        {todos.map((todo,index)=>{
          return(
            <li key={index}>{todo}</li>

          )
        })}
      </ul>
    </>
  );
}

export default App;
