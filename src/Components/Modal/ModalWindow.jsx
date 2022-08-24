
import { Button, Modal } from 'react-bootstrap'
import { useContext } from 'react';
import { ModalContext } from '../../Context/ModalContext';
import LoginBtn from '../UI/LoginBtn';

export default function ModalWindow(props) {

  const { show, open, close } = useContext(ModalContext);

  function handleClose() {
   close();
  }
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header><Modal.Body>
          <div className="login-area">
            <div>Login</div>
            <input type='text' id="login" placeholder='Your account'></input>
          </div>
          <div className="password-area">
            <div htmlFor='password'>Password</div>
            <input type='text' id="password" placeholder='Your password'></input>
          </div>

        </Modal.Body>
        <Modal.Footer>
          <LoginBtn >SING IN</LoginBtn>
        </Modal.Footer>
      </Modal>
    </>

  )
}
