import React, { useState } from "react";
import "./App.css";
import "./index.css";
import { CheckedInput } from "./components/CheckedInput";

const App = () => {
  const handleAdd = () => {
    setTodos((prevState) => [...prevState, { text: text, done: check }]);
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
        {todos.map((item, index) => {
          return <CheckedInput item={item} key={index} />;
        })}
      </div>
    </div>
  );
};

export default App;
