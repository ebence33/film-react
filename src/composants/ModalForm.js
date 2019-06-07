import React, { Component } from "react";

import Modal from "react-responsive-modal";
import { Button } from "react-bootstrap";
import Formulaire from "./Formulaire";

class ModalForm extends Component {
  state = {
    open: false
  };

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  render() {
    const { open } = this.state;
    return (
      <div>
        <Button onClick={this.onOpenModal}>Ajouter un film</Button>
        <Modal open={open} onClose={this.onCloseModal} center>
          <Formulaire />
        </Modal>
      </div>
    );
  }
}
export default ModalForm;
