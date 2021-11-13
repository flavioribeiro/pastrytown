import React, { useEffect } from "react";
import ReactStars from "react-rating-stars-component";
import Heart from "react-heart"
import useLocalStorage from 'react-use-localstorage';
import "../styles.css";

const BeerItem = (props) => {
  const [isComplete, setIsComplete] = useLocalStorage(props.item.id + 'isComplete', props.item.cSt);
  const [isFavorite, setIsFavorite] = useLocalStorage(props.item.id + 'isFavorite', props.item.fSt);
  const [rating, setRating] = useLocalStorage(props.item.id + 'rating', props.item.r);

  const handleCompleteChange = () => {
    props.item.cSt = !props.item.cSt;
    setIsComplete(props.item.cSt);
  };

  const handleFavoriteChange = () => {
    props.item.fSt = !props.item.fSt;
    setIsFavorite(props.item.fSt);
  }

  const handleRatingChange = (newRating) => {
    props.item.r = newRating;
    setRating(newRating);
  }

  return (
    <div className="todo-item">
      <input type="checkbox" checked={isComplete && isComplete == 'true'} onChange={handleCompleteChange} />
      <p className={isComplete && isComplete == 'true' ? "completed-style" : null}>{props.item.brewery}</p>
      <p className={isComplete && isComplete == 'true' ? "completed-style" : null}>{props.item.title}</p>
      <p className={isComplete && isComplete == 'true' ? "completed-style" : null}>{props.item.desc}</p>
      <ReactStars count={5} value={Number(rating)} onChange={handleRatingChange} size={12} activeColor="#ffd700" />
      <Heart isActive={isFavorite === 'true'} onClick={handleFavoriteChange} className="heart" />
    </div>
  );
};

export default BeerItem;
