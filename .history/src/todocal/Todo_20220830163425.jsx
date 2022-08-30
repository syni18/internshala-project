import React, {useState} from "react";
import { IconButton } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import TodoList from "./TodoList";
import Sidebar from "../dashboard/Sidebar";
import "./todo.css";

function Todo() {

  const [inputList, setInputList ] = useState();
  const [items, setItems] = useState([]);
  

  const itemadded = (e) => {
    setInputList(e.target.value);
  }

  const todoEvent = (e) => {
    setItems(curr => {
      return [...curr, inputList]
    });
    setInputList("")
  }

  const deleteitem = (id) => {
    setItems(curr => {
      return curr.filter((arrElement,i) => {
        return i !== id
      } )
    })
  };

  return (
    <div className="dashboard">
      <div className="dashboard_container">
       <Sidebar/>
        <div className="dashboard_body forTodo">
          <h1>ToDo List</h1>
          <div className="todo_container">
            <input
              type="text"
              value={inputList}
              placeholder="Add a Item..."
              onChange={itemadded}
            />
            <IconButton onClick={todoEvent}>
              <AddCircleIcon style={{ fontSize: "44px" }} />
            </IconButton>
          </div>
          <div className="todo_list">
            <ol>
              {items.map((val, i) => {
                return (
                  <TodoList key={i} id={i} text={val} onSelect={deleteitem} />
                );
              })}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Todo;
