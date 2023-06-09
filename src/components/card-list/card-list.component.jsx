import React from "react";
import Card from "../card/card.component";

const cardList = ({ robots }) => {
  return (
    <div>
      {robots.map((user, i) => {
        return (
          <Card
            key={robots[i].id}
            id={robots[i].id}
            name={robots[i].name}
            email={robots[i].email}
            username={robots[i].username}
          />
        );
      })}
    </div>
  );
};

export default cardList;
