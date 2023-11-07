import React, { useState } from "react";
import Card from "../components/Card";

function Wishlist() {
  const [likedCards, setLikedCards] = useState([]);

  // Add a function to handle adding liked cards
  const addToWishlist = (card) => {
    setLikedCards([...likedCards, card]);
  };

  return (
    <div>
      {likedCards.length === 0 ? (
        <h1>Your Wishlist is empty</h1>
      ) : (
        <div>
          <h1>My Wishlist</h1>
          {likedCards.map((card, index) => (
            <Card key={index} {...card} inWishlist={true} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Wishlist;
