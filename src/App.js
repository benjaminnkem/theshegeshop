import {useEffect, useState} from "react";
import Feed from "./components/Feed";
import Navbar from "./components/Navbar";
import SidePanel from "./components/SidePanel";
import Test from "./components/Test";

function App() {
  const [items] = useState([
    {
      id: 1,
      itemName: "LG TV",
      price: "$299.99",
      desc: "An LG television available for sale in FUNAAB, Ogun State",
      imgSrc: "/images/tv.jpg",
      seller: "Benjamin Nkem",
      quan: 1,
    },
    {
      id: 2,
      itemName: "4x6 Bed",
      price: "$149.99",
      desc: "Get a nice bed before going to school to prevent seeing shege",
      imgSrc: "/images/bed.jpg",
      seller: "Elon Judas",
      quan: 1,
    },
    {
      id: 3,
      itemName: "Lexus 360",
      price: "$1499.99",
      desc: "Get a Lexus 360 today and reach your destination on time",
      imgSrc: "/images/lexus.jpg",
      seller: "Kehinde Berry",
      quan: 1,
    },
    {
      id: 4,
      itemName: "Mangoes",
      price: "$2.99",
      desc: "Get Fresh mangoes with tastes out of this world... All available in store.",
      imgSrc: "/images/mangoes.jpg",
      seller: "Alan Walker",
      quan: 1,
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
      quan: 1,
    },
  ]);

  const [allItems, setAllItems] = useState([]);
  const [multiKeyCheck, setMultiKeyCheck] = useState(true);

  function addItemToCart(item) {
    setAllItems(() => [...allItems, item]);
  }

  useEffect(() => {
    if (allItems.length >= 1)
      allItems.forEach((item) => {
        if (item.id === 1)
          console.log("Multi key", item)
      })
  }, [allItems])

  return (
    <div id="main__con__con">
      <div id="header__con">
        <Navbar allItems={allItems.length}/>
      </div>
      <div id="body__con">
        <Feed items={items} addItemToCart={addItemToCart}/>

        <div id="side__panel__con">
          <SidePanel allItems={allItems}/>
        </div>

        <Test/>
      </div>
    </div>
  );
}

export default App;
