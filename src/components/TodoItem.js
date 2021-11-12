import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";
import "../styles.css";

const TodoItem = (props) => {
  const [isComplete, setIsComplete] = useState(props.item.completeStatus);

  const handleCompleteChange = () => {
    props.item.completeStatus = !props.item.completeStatus;
    setIsComplete(props.item.completeStatus);
  };

  const handleRatingChange = (newRating) => {
    console.log(newRating);
  }

  return (
    <div className="todo-item">
      <input type="checkbox" checked={isComplete} onChange={handleCompleteChange} />
      <p className={isComplete ? "completed-style" : null}>
        {props.item.description}
      </p>
      <ReactStars count={5} onChange={handleRatingChange} size={24} activeColor="#ffd700" />
    </div>
  );
};

export default TodoItem;
