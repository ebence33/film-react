import React, { Component } from "react";
import Item from "./Item";
import { Card, CardGroup } from "react-bootstrap";
import Videocurrent from "./Videocurrent";
import VideoDetails from "./Videodetails";
import Modal from "react-responsive-modal";

class Listitems extends Component {
  state = {
    resultat: [],
    isLoad: true,
    Videourl: "",
    TitreVideo: "",
    DescriptionVideo: "",
    open: false
  };

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  componentDidMount() {
    fetch("http://localhost:8000/api/films")
      .then(res => res.json())
      .then(data => this.setState({ resultat: data, isLoad: false }));
  }

  render() {
    const {
      resultat,
      isLoad,
      Videourl,
      TitreVideo,
      DescriptionVideo,
      open
    } = this.state;
    const renderitem = !isLoad ? (
      resultat.data.map(item => {
        return (
          <div
            className="VideoItem"
            key={item.id}
            onClick={() =>
              this.setState({
                Videourl: item.url,
                TitreVideo: item.title,
                DescriptionVideo: item.description,
                open: true
              })
            }
            onLoad={() =>
              this.setState({
                Videourl: resultat.data[0].url,
                TitreVideo: resultat.data[0].title,
                DescriptionVideo: resultat.data[0].description
              })
            }
          >
            <Card>
              <Item titre={item.title} image={item.image} />
            </Card>
          </div>
        );
      })
    ) : (
      <p> Chargement de données en cours ... </p>
    );
    return (
      <div className="row">
        <Modal open={open} onClose={this.onCloseModal} center>
          <Videocurrent Videourl={Videourl} />
          <VideoDetails titre={TitreVideo} description={DescriptionVideo} />
        </Modal>

        <CardGroup>{renderitem}</CardGroup>
      </div>
    );
  }
}

export default Listitems;
