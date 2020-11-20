import React from "react";
import Brew from "./Brew";
import PropTypes from "prop-types";

function InventoryList(props) {
  return(
    <React.Fragment>
      <hr />
      {props.brewList.map((brew) => 
      <Brew 
        whenBrewClicked = {props.onBrewSelection}
        name = {brew.name}
        brand = {brew.brand}
        price = {brew.price}
        alcoholContent = {brew.alcoholContent}
        pints = {brew.pints} 
        id = {brew.id}
        key = {brew.id} />
      )}
    </React.Fragment>
  );
}

InventoryList.propTypes = {
  brewList: PropTypes.array,
  onBrewSelection: PropTypes.func
};

export default InventoryList;