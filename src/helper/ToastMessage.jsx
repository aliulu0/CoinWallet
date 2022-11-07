import React from 'react'
import { Row, Col, Toast } from "react-bootstrap";
import { useUser } from '../context/userContext';
function ToastMessage(props) {

  const {theme} = useUser()

    return (
    <Row>
      <Col xs={6}>
      <Toast onClose={props.close} show={props.isShow} className={`${theme === "dark" ? "bg-dark text-light" : ""}`}>
          <Toast.Header>
            <strong className="me-auto">Coin Wallet</strong>
          </Toast.Header>
          <Toast.Body>{props.message}</Toast.Body>
        </Toast>
      </Col>
    </Row>
    )
}

export default ToastMessage