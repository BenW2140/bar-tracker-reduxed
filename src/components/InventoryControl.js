import React from "react";
import InventoryList from "./InventoryList";
import NewBrewForm from "./NewBrewForm";

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
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
    }));
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewBrewForm />
      buttonText = "Update Inventory";
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