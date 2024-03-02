import React from "react";
import ReactDOM from "react-dom";

const Card = ({ name, address, website, phone, rating, image }) => {
  return (
    <div className="card">
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p>
        <b>Address: </b>
        <a href={"https://www.google.com/maps/dir/Current+Location/" + name}>
          {address}
        </a>
      </p>
      <p>
        <b>Website:</b> <a href={website}>{website}</a>
      </p>
      <p>
        {/* Remove non-numeric characters from the phone number before putting into href of anchor tag*/}
        <b>Phone:</b> <a href={"tel:" + phone.replace(/\D/g, "")}>{phone}</a>
      </p>
      <p>
        <b>Rating:</b> {rating}
      </p>
    </div>
  );
};

export default Card;
