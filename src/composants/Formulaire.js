import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";

class Formulaire extends Component {
  state = {
    titre: "",
    description: "",
    image: "",
    url: ""
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log("Le film a été soumis :" + JSON.stringify(this.state));
    const { titre, description, image, URL } = this.state;
    fetch("http://localhost:8000/api/film", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: titre,
        description: description,
        image: image,
        url: URL
      })
    })
      .then(res => console.log(res.json))
      .catch(err => console.log(err));
  };

  render() {
    const { titre, description, image, URL } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group controlId="titre">
          <Form.Label>Titre</Form.Label>
          <Form.Control
            type="text"
            placeholder="Entrer un titre"
            name="titre"
            value={titre}
            onChange={this.handleChange}
          />
          <Form.Text className="text-muted">{this.state.titre}</Form.Text>
        </Form.Group>

        <Form.Group controlId="description">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            placeholder="Entrer une description"
            name="description"
            value={description}
            onChange={this.handleChange}
          />
          <Form.Text className="text-muted">{this.state.description}</Form.Text>
        </Form.Group>
        <Form.Group controlId="image">
          <Form.Label>Image</Form.Label>
          <Form.Control
            type="text"
            placeholder="Insérer une image"
            name="image"
            value={image}
            onChange={this.handleChange}
          />
          <Form.Text className="text-muted">{this.state.image}</Form.Text>
        </Form.Group>
        <Form.Group controlId="url">
          <Form.Label>URL</Form.Label>
          <Form.Control
            type="text"
            placeholder="Entrer un URL"
            name="URL"
            value={URL}
            onChange={this.handleChange}
          />
          <Form.Text className="text-muted">{this.state.URL}</Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit">
          Enregistrer
        </Button>
      </Form>
    );
  }
}
export default Formulaire;
