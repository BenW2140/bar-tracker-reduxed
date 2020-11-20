import React from "react";
import PropTypes from "prop-types";

function GenericForm(props) {
  return(
    <React.Fragment>
      <form onSubmit = {props.formSubmissionHandler}>
        <input 
          type = 'text'
          name = 'name'
          placeholder = 'Brew Name' />
        <input 
          type = 'text'
          name = 'brand'
          placeholder = 'Brand Name' />
        <input 
          type = 'number'
          name = 'price'
          placeholder = 'Price per Pint' />
        <input 
          type = 'number'
          name = 'alcoholContent'
          placeholder = 'Alcohol Content' />
        <input 
          type = 'number'
          name = 'pints'
          placeholder = 'Pints' />
        <button type = 'submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

GenericForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default GenericForm;