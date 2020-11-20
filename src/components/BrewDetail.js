import React from 'react';
import PropTypes from 'prop-types';

function BrewDetail(props) {
  const { brew } = props;
  return(
    <React.Fragment>
      <h2>{brew.name} Details</h2>
      <h4>Brand: {brew.brand}</h4>
      <p>${brew.price}</p>
      <p>{brew.alcoholContent}%</p>
      <p>Pints: {brew.pints}</p>
      <hr />
    </React.Fragment>
  );
}

BrewDetail.propTypes = {
  brew: PropTypes.object
};

export default BrewDetail;