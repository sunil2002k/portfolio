import React from "react";
import { useState } from "react";

const Todos = () => {
  const [todos, setTodos] = useState(createInitialTodos());
  const [text, setText] = useState("");

  function createInitialTodos() {
    const initialTodos = [];
    for (let i = 0; i < 10; i++) {
      initialTodos.push({ id: i, text: "Item" + (i + 1) });
    }
    return initialTodos;
  }

  return (
    < div className=" ml-5 mt-5 mb-5 mr-5 p-5 border rounded-md shadow-md ">
    <h4 className="text-2xl text-center">Todos App</h4>
      <input
        className="border rounded-sm"
        
        placeholder="Enter todo"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={() => {
          setText("");
          setTodos([{ id: todos.length, text: text }, ...todos]);
        }}
        className="border rounded-sm p-0.5 ml-1.5 mb-1.5 hover:bg-gray-300 hover:text-black mr-1.5"
      >
        Add
      </button>
      <ol>
        {todos.map((item) => (
          <li key={item.id}>{item.text}</li>
          
        ))}
      </ol>
    </div>
  );
};

export default Todos;
