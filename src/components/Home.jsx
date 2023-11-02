import React, { useState, useRef } from "react";
import Card from "./Card";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

function Home() {
  const containerRef = useRef(null);

  const handleScrollLeft = () => {
    containerRef.current.scrollLeft -= 200; // adjust scroll distance as needed
  };

  const handleScrollRight = () => {
    containerRef.current.scrollLeft += 200; // adjust scroll distance as needed
  };

  return (
    <div className="home">
      <div className="hero">
        <div className="carousel">
          <div className="carousel-img-container">
            <img
              src="https://realcomputer.in/image/cache/catalog/Asus%20Baneer/Asus%20Baneer%20OLED-1920x608.jpg"
              alt="puma sneaker"
            />
          </div>
        </div>
        <div className="shop-now-container">
          <div className="shop-now">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwvGGRwqPIX-SjA26sibEQKOnNLM02IWsbdw&usqp=CAU"
              alt="iphone"
            />
            <button className="shop-now-btn">Shop Now</button>
          </div>
          <div
            className="shop-now"
            style={{
              borderTop: "1px dotted #bbb",
              borderBottom: "1px dotted #bbb",
            }}
          >
            <img
              src="https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="sneakers"
            />
            <button className="shop-now-btn">Shop Now</button>
          </div>
          <div className="shop-now">
            <img
              src="https://images.pexels.com/photos/2409681/pexels-photo-2409681.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="dress"
            />
            <button className="shop-now-btn">Shop Now</button>
          </div>
        </div>
      </div>

      <div className="deals">
        <h2>Deals of the Day</h2>
        <div className="deals-container list-container" ref={containerRef}>
          <button onClick={handleScrollLeft}>
            <ChevronLeftIcon />
          </button>
          <Card
            className="null"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDt_ozrRlYBFX3UnE3vtt3g-UVr9u8Mgc0bg&usqp=CAU"
            alt="airpods"
            desc="i7S TWS Twins Wireless In the Ear..."
            price="1999"
            strickedPrice="7999"
            discount="93"
          />
          <Card
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSa2-xgm9CCALTUBz-KiF_aCpke723LTtsRQ&usqp=CAU"
            alt="sneakers"
            desc="Woakers Men Multicolor Lace-up Sneakers..."
            price="679"
            strickedPrice="1999"
            discount="80"
          />
          <Card
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1oATewfdse7itoDSVllPT7FTN_v3Im8Yp2w&usqp=CAU"
            alt="shirts"
            desc="Hana & Morris Men Checked Casual Shirts..."
            price="479"
            strickedPrice="1500"
            discount="68"
          />
          <Card
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx96D46lhratgqfuBFMKUfmT22OKmVf97UmQ&usqp=CAU"
            alt="adidas"
            desc="Adidas Running Sports Shoe for Men..."
            price="1399"
            strickedPrice="4999"
            discount="79"
          />
          <Card
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh6RQT4NjjMdzuyqND3W8T0K5B8O23sG6NNg&usqp=CAU"
            alt="ptron tws"
            desc="pTron Zen TWS Earbuds 10hr..."
            price="699"
            strickedPrice="1599"
            discount="60"
          />
          <Card
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJJDRIOv7IFBaePbqphdMlVahBsbDcF-X1zA&usqp=CAU"
            alt="food container"
            desc="Trueware Freshy Storage Container..."
            price="458"
            strickedPrice="849"
            discount="55"
          />
          <Card
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJJDRIOv7IFBaePbqphdMlVahBsbDcF-X1zA&usqp=CAU"
            alt="food container"
            desc="Trueware Freshy Storage Container..."
            price="458"
            strickedPrice="849"
            discount="55"
          />
          <Card
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJJDRIOv7IFBaePbqphdMlVahBsbDcF-X1zA&usqp=CAU"
            alt="food container"
            desc="Trueware Freshy Storage Container..."
            price="458"
            strickedPrice="849"
            discount="55"
          />

          <button onClick={handleScrollRight}>
            <ChevronRightIcon />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
