import React, { useState, useEffect } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";
const WALLET = 100;

function App() {
  const [sushis, setSushis] = useState([]);

  const eatenSushis = sushis.filter((sushi) => sushi.isEaten);

  let total = eatenSushis.reduce((amount, item) => {
    return amount + item.price;
  }, 0);

  const remaining = WALLET - total;

  const eatSushi = (id) => {
    const sushi = sushis.find((sushi) => sushi.id === id);
    if (sushi.price <= remaining) {
      setSushis(
        sushis.map((sushi) => {
          if (sushi.id === id) {
            return { ...sushi, isEaten: true };
          } else {
            return sushi;
          }
        })
      );
    }
  };

  useEffect(() => {
    fetch(API)
      .then((r) => r.json())
      .then((data) => {
        setSushis(data);
      });
  }, []);

  return (
    <div className="app">
      <SushiContainer sushis={sushis} eatSushi={eatSushi} />
      <Table plates={eatenSushis} remaining={remaining} />
    </div>
  );
}

export default App;
