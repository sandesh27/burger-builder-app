import React from "react";
import Aux from "../../../hoc/Auxilliary";
import classes from "./OrderSummary.css";

const orderSummary = props => {
  const ingredientsSummary = Object.keys(props.ingredients).map(igKey => {
    return (
      <li className={classes.OrderSummary} key={igKey}>
        <span>{igKey}</span>: {props.ingredients[igKey]}
      </li>
    );
  });
  return (
    <Aux>
      <h3>Your Order</h3>
      <p>A delecious burger with the following ingredients:</p>
      <ul>{ingredientsSummary}</ul>
    </Aux>
  );
};

export default orderSummary;
