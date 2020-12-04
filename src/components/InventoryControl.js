import React from "react";
import InventoryList from "./InventoryList";
import NewBrewForm from "./NewBrewForm";
import BrewDetail from './BrewDetail';
import EditBrewForm from "./EditBrewForm";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class InventoryControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      selectedBrew: null,
      editing: false
    }
  }

  handleClick = () => {
    if (this.state.selectedBrew != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedBrew: null,
        editing: false
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage
      }));
    }
  }

  handleAddingBrew = (newBrew) => {
    const { dispatch } = this.props;
    const { id, name, brand, price, alcoholContent, pints } = newBrew;
    const action = {
      type: 'ADD_BREW',
      id: id,
      name: name,
      brand: brand,
      price: price,
      alcoholContent: alcoholContent,
      pints: pints
    }
    dispatch(action);
    this.setState({
      formVisibleOnPage: false
    });
  }

  handleToggleBrewDetails = (id) => {
    const selectedBrew = this.props.masterListOfBrews[id];
    this.setState({
      selectedBrew: selectedBrew
    });
  }

  handleBrewRemoval = (id) => {
    const { dispatch } = this.props;
    const action = {
      type: 'DELETE_BREW',
      id: id
    }
    dispatch(action);
    this.setState({
      selectedBrew: null
    });
  }

  handleEditBrew = () => {
    this.setState({
      editing: true
    });
  }

  handleEditingSelectedBrew = (brewToEdit) => {
    const { dispatch } = this.props;
    const { id, name, brand, price, alcoholContent, pints } = newBrew;
    const action = {
      type: 'ADD_BREW',
      id: id,
      name: name,
      brand: brand,
      price: price,
      alcoholContent: alcoholContent,
      pints: pints
    }
    dispatch(action);
    this.setState({
      selectedBrew: null,
      editing: false
    });
  }

  handleBrewSale = () => {
    
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.editing) {
      currentlyVisibleState = <EditBrewForm brew = {this.state.selectedBrew} onEditBrew = {this.handleEditingSelectedBrew} />
      buttonText = "View Inventory";
    } else if (this.state.selectedBrew != null) {
      currentlyVisibleState = <BrewDetail brew = {this.state.selectedBrew} onClickingDelete = {this.handleBrewRemoval} onClickingEdit = {this.handleEditBrew} />
      buttonText = "View Inventory";
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewBrewForm onNewBrewCreation = {this.handleAddingBrew} />
      buttonText = "View Inventory";
    } else {
      currentlyVisibleState = <InventoryList brewList = {this.props.masterListOfBrews} onBrewSelection = {this.handleToggleBrewDetails} />
      buttonText = "Add Brew";
    }

    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick = {this.handleClick}>{buttonText}</button>
      </React.Fragment>
    )
  }
}

InventoryControl.propTypes = {
  masterListOfBrews: PropTypes.object
}

const mapStateToProps = state => {
  return {
    masterListOfBrews: state
  }
}

InventoryControl = connect(mapStateToProps)(InventoryControl);

export default InventoryControl;