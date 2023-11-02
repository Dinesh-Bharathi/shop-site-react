import React, { useState } from "react";
import Card from "./Card"; // Import the Card component

function Wishlist() {
  const [likedCards, setLikedCards] = useState([]);

  // Add a function to handle adding liked cards
  const addToWishlist = (card) => {
    setLikedCards([...likedCards, card]);
  };

  return (
    <div>
      <h1>My Wishlist</h1>
      {likedCards.map((card, index) => (
        <Card key={index} {...card} inWishlist />
      ))}
    </div>
  );
}

export default Wishlist;
