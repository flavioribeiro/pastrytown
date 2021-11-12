import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";
import Heart from "react-heart"
import "../styles.css";

const BeerItem = (props) => {
  const [isComplete, setIsComplete] = useState(props.item.completeStatus);
  const [isFavorite, setIsFavorite] = useState(props.item.favoriteStatus);
  const [rating, setRating] = useState(props.item.ratingStatus);

  const handleCompleteChange = () => {
    props.item.completeStatus = !props.item.completeStatus;
    setIsComplete(props.item.completeStatus);
  };

  const handleFavoriteChange = () => {
    props.item.favoriteStatus = !props.item.favoriteStatus;
    setIsFavorite(props.item.favoriteStatus);
  }

  const handleRatingChange = (newRating) => {
    props.item.ratingStatus = newRating;
    setRating(newRating);
  }

  return (
    <div className="todo-item">
      <input type="checkbox" checked={isComplete} onChange={handleCompleteChange} />
      <p className={isComplete ? "completed-style" : null}>
        {props.item.description}
      </p>
      <ReactStars count={5} onChange={handleRatingChange} size={24} activeColor="#ffd700" />
      <Heart isActive={props.item.favoriteStatus} onClick={handleFavoriteChange} className="heart" />
    </div>
  );
};

export default BeerItem;
