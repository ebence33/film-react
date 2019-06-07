import React from "react";
import { Navbar } from "react-bootstrap";
import ModalForm from "./ModalForm";

const Header = () => {
  return (
    <div>
      <Navbar bg="dark" variant="light">
        <ModalForm />
      </Navbar>
    </div>
  );
};
export default Header;
