import { useEffect, useState } from "react";
import Feed from "./components/Feed";
import Navbar from "./components/Navbar";

function App() {
  const [items, setItems] = useState([
    {
      id: 1,
      itemName: "Television",
      price: "$299.99",
      desc: "An LG television available for sale in FUNAAB, Ogun State",
      imgSrc: "/images/tv.jpg",
      seller: "Benjamin Nkem",
    },
    {
      id: 2,
      itemName: "4x6 Bed",
      price: "$149.99",
      desc: "Get a nice bed before going to school to prevent seeing shege",
      imgSrc: "/images/bed.jpg",
      seller: "Elon Judas",
    },
    {
      id: 3,
      itemName: "Lexus 360",
      price: "$1499.99",
      desc: "Get a Lexus 360 today and reach your destination on time",
      imgSrc: "/images/lexus.jpg",
      seller: "Kehinde Berry",
    },
    {
      id: 4,
      itemName: "Mangoes",
      price: "$2.99",
      desc: "Get Fresh mangoes with tastes out of this world... All available in store.",
      imgSrc: "/images/mangoes.jpg",
      seller: "Alan Walker",
    },
    {
      id: 5,
      itemName: "Macbook",
      price: "$4999.99",
      desc: "All Macbook are available in store, get the one of your choice",
      imgSrc: "/images/mac.jpg",
      seller: "Micahel Jordan",
    },
    {
      id: 6,
      itemName: "Toothbrush",
      price: "$19.99",
      desc: "Get your toothbrush for as low as $19.99, shege will be seen",
      imgSrc: "/images/brush.jpg",
      seller: "Wizkid",
    },
  ]);

  const [allItems, setAllItems] = useState([]);

  function addItemToCart(item) {
    setAllItems(() => [...allItems, item]);
  }

  return (
    <div id="main__con__con">
      <div id="header__con">
        <Navbar allItems={allItems.length} />
      </div>
      <div id="body__con">
        <Feed items={items} addItemToCart={addItemToCart} />
      </div>
    </div>
  );
}

export default App;
