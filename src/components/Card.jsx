import React, { useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

function Card(props) {
  const [isLiked, setIsLiked] = useState(false);

  const toggleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div className="deals-card">
      <img src={props.src} alt={props.alt} />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <p className="card-desc">{props.desc}</p>
        <button
          className="like-button"
          style={{ background: "0", border: "0" }}
          onClick={toggleLike}
        >
          {isLiked ? (
            <FavoriteIcon color="error" />
          ) : (
            <FavoriteBorderIcon color="action" />
          )}
        </button>
      </div>
      <p className="price">
        &#8377;{props.price}
        <span className="stricked-price">&#8377;{props.strickedPrice}</span>
        <span className="offer">{props.discount}% off</span>
      </p>
    </div>
  );
}

export default Card;
