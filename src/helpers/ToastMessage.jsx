import React from 'react'
import Toast from 'react-bootstrap/Toast';

function ToastMessage({message}) {

  const getHours = new Date().getHours().toString();
  const getMinutes = new Date().getMinutes().toString();
  const getMilliseconds = new Date().getMilliseconds().toString();

  if (getMilliseconds > 99) {
    return getMinutes;
  } else if(getMinutes > 59){
    return getHours;
  }

  return (
    <Toast>
      <Toast.Header>
        <strong className="me-auto">Coin Wallet</strong>
        <small>{console.log(getMilliseconds)} mins ago</small>
      </Toast.Header>
      <Toast.Body>{message}</Toast.Body>
    </Toast>
  )
}

export default ToastMessage;