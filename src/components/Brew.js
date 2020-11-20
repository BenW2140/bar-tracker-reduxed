import React from "react";
import PropTypes from "prop-types";

function Brew(props) {
  return(
    <React.Fragment>
      <div onClick = {() => props.whenBrewClicked(props.id)}>
        <h3>Name: {props.name}</h3>
        <hr />
      </div>
    </React.Fragment>
  );
}

Brew.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.number,
  alcoholContent: PropTypes.number,
  pints: PropTypes.number,
  whenBrewClicked: PropTypes.func
};

export default Brew;