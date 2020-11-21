import React from 'react';
import PropTypes from 'prop-types';
import GenericForm from './GenericForm';

function EditBrewForm(props) {
  const { brew } = props;

  function handleSubmission(event) {
    event.preventDefault();
    props.onEditBrew({
      name: event.target.name.value,
      brand: event.target.brand.value,
      price: event.target.price.value,
      alcoholContent: event.target.alcoholContent.value,
      pints: event.target.pints.value,
      id: brew.id
    });
  }

  return(
    <React.Fragment>
      <GenericForm
        formSubmissionHandler = {handleSubmission}
        buttonText = "Update Brew" />
    </React.Fragment>
  );
}

EditBrewForm.propTypes = {
  onEditBrew: PropTypes.func
};

export default EditBrewForm;