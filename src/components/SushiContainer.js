import React, { useState } from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({ sushis, eatSushi }) {
  const [start, setStart] = useState(0);

  const fourSushis = sushis.slice(start, start + 4);

  const moreSushi = () => {
    setStart(start + 4);
  };

  const sushiPlates = fourSushis.map((sushi) => {
    return (
      <Sushi
        key={sushi.id}
        id={sushi.id}
        image={sushi.img_url}
        name={sushi.name}
        price={sushi.price}
        isEaten={sushi.isEaten}
        eatSushi={eatSushi}
      />
    );
  });

  return (
    <div className="belt">
      {sushiPlates}
      <MoreButton moreSushi={moreSushi} />
    </div>
  );
}

export default SushiContainer;
