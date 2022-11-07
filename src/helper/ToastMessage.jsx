import React from 'react'
import { Row, Col, Toast } from "react-bootstrap";

function ToastMessage(props) {

    return (
    <Row>
      <Col xs={6}>
      <Toast onClose={props.close} show={props.isShow}>
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