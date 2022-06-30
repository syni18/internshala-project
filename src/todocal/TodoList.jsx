import React from 'react'
import CancelIcon from "@mui/icons-material/Cancel";
function TodoList(props) {
  return (
    <div className="todo_list">
      <li>
        <CancelIcon onClick={() =>{
            props.onSelect(props.id)
        }}/>
        {props.text}
      </li>
    </div>
  );
}

export default TodoList