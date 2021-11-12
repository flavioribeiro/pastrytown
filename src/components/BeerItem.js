import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";
import Heart from "react-heart"
import "../styles.css";

const BeerItem = (props) => {
  const [isComplete, setIsComplete] = useState(props.item.cSt);
  const [isFavorite, setIsFavorite] = useState(props.item.fSt);
  const [rating, setRating] = useState(props.item.r);

  const handleCompleteChange = () => {
    props.item.completeStatus = !props.item.completeStatus;
    setIsComplete(props.item.completeStatus);
  };

  const handleFavoriteChange = () => {
    props.item.favoriteStatus = !props.item.favoriteStatus;
    setIsFavorite(props.item.favoriteStatus);
  }

  const handleRatingChange = (newRating) => {
    props.item.r = newRating;
    setRating(newRating);
  }

  return (
    <div className="todo-item">
      <input type="checkbox" checked={isComplete} onChange={handleCompleteChange} />
      <p className={isComplete ? "completed-style" : null}>
        {props.item.title}
      </p>
      <p>
        {props.item.desc}
      </p>
      <ReactStars count={5} onChange={handleRatingChange} size={24} activeColor="#ffd700" />
      <Heart isActive={isFavorite} onClick={handleFavoriteChange} className="heart" />
    </div>
  );
};

export default BeerItem;
