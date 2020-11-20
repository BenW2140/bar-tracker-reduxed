import React from "react";
import InventoryList from "./InventoryList";
import NewBrewForm from "./NewBrewForm";
import BrewDetail from './BrewDetail';

class InventoryControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      masterListOfBrews: [],
      selectedBrew: null
    }
  }

  handleClick = () => {
    if (this.state.selectedBrew != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedBrew: null
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage
      }));
    }
  }

  handleAddingBrew = (newBrew) => {
    const newMasterListOfBrews = this.state.masterListOfBrews.concat(newBrew);
    this.setState({
      masterListOfBrews: newMasterListOfBrews,
      formVisibleOnPage: false
    });
  }

  handleToggleBrewDetails = (id) => {
    const selectedBrew = this.state.masterListOfBrews.filter(brew => brew.id === id)[0];
    this.setState({
      selectedBrew: selectedBrew
    });
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.selectedBrew != null) {
      currentlyVisibleState = <BrewDetail brew = {this.state.selectedBrew} />
    }
    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewBrewForm onNewBrewCreation = {this.handleAddingBrew} />
      buttonText = "View Inventory";
    } else {
      currentlyVisibleState = <InventoryList brewList = {this.state.masterListOfBrews}/>
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

export default InventoryControl;