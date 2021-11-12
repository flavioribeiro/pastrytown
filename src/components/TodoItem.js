import React, { useState } from "react";
import "../styles.css";

const TodoItem = (props) => {
  const [isComplete, setIsComplete] = useState(props.item.completeStatus);

  const handleChange = () => {
    props.item.completeStatus = !props.item.completeStatus;
    setIsComplete(props.item.completeStatus);
  };
  return (
    <div className="todo-item">
      <input type="checkbox" checked={isComplete} onChange={handleChange} />
      <p className={isComplete ? "completed-style" : null}>
        {props.item.description}
      </p>
    </div>
  );
};

export default TodoItem;
