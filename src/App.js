import React, { useState } from "react";
import "./App.css";
import "./index.css";

const App = (props) => {
  const handleAdd = () => {
    setTodos([{ text: text, done: check }, ...todos]);
  };
  const handleTodoText = (e) => {
    setText(e.target.value);
  };

  const [text, setText] = useState("");

  const [check, setCheck] = useState(false);

  const [todos, setTodos] = useState([
    { text: "AAA", done: true },
    { text: "BBB", done: false },
    { text: "CCC", done: true },
  ]);
  return (
    <div>
      <input type="text" onChange={handleTodoText} />
      <input type="checkbox" onChange={() => setCheck(!check)} />
      <button onClick={handleAdd}>click</button>
      <div>
        {todos.map((item) => {
          return (
            <div>
              <input type="checkbox" checked={item.done} />
              {item.text}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
