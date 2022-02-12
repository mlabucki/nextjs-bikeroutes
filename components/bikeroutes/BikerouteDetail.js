import { Fragment } from "react";

import classes from "./BikerouteDetail.module.css";

function BikerouteDetail(props) {
  return (
    <section className={classes.detail}>
      <img src={props.image} alt={props.title} />
      <h1>{props.title}</h1>
      <p>{props.city}</p>
      <p>{props.distance}</p>
      <p>{props.description}</p>
    </section>
  );
}

export default BikerouteDetail;
