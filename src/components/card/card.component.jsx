import React from "react";

const Card = ({ name, email, username }) => {
  return (
    <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 tc">
      <img
        src={`https://robohash.org/${name}${username}?200x200`}
        alt="robots"
      />
      <div>
        <h2>{name}</h2>
        <p>Username: {username}</p>
        <p>Email: {email}</p>
      </div>
    </div>
  );
};

export default Card;
