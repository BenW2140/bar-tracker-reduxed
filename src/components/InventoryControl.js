import React from "react";

class InventoryControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnSite: false,
      masterListOfBrews: [],
      selectedBrew: null
    }
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;

    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick = {this.handleClick}>{buttonText}</button>
      </React.Fragment>
    )
  }
}

export default InventoryControl;