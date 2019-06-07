import React, { Component } from "react";
import { Card } from "react-bootstrap";

class Item extends Component {
  render() {
    const { titre, image } = this.props; //Ici on met les props, qui sont titre et image et qu'on récup chez le composant parent, qu'on a créer là bas
    return (
      <div>
        <Card style={{ width: "25rem" }}>
          <center>
            <Card.Img
              src={image}
              alt="image"
              style={{ width: 150, height: 130 }}
              rounded
            />
          </center>
          <Card.Body>
            <Card.Title> {titre}</Card.Title>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
export default Item;
