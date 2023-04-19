import React from "react";

function Sushi({ id, image, name, price, isEaten, eatSushi }) {
  const handleClick = () => {
    eatSushi(id);
  };

  return (
    <div className="sushi">
      <div className="plate" onClick={handleClick}>
        {/* Tell me if this sushi has been eaten! */}
        {isEaten ? null : <img src={image} alt={name} width="100%" />}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}{" "}
      </h4>
    </div>
  );
}

export default Sushi;
