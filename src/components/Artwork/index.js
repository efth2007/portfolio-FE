import React from "react";

import { Link } from "react-router-dom";

export default function Artwork(props) {
  return (
    <div class="card">
      <img src={props.imageUrl} class="img-fluid" alt={props.title} />

      <div class="card-body">
        <h4 class="card-title">
          {props.title} ({props.date})
        </h4>
        <p class="card-text">{props.description}</p>
      </div>
    </div>
  );
}