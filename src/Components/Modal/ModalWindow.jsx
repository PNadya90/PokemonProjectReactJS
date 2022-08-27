
import { Modal } from 'react-bootstrap'
import { useContext, useState } from 'react';
import { ModalContext } from '../../Context/ModalContext';
import LoginBtn from '../UI/LoginBtn';
import { useForm } from 'react-hook-form'


export default function ModalWindow(props) {
  let [login, setLogin] = useState();
  let [password, setPassword] = useState();
  const { show, open, close } = useContext(ModalContext);
  const { register, handleSubmit, reset, formState: { errors } } = useForm({ mode: 'onBlur' })

  let flag = false;
  function handleClose() {
    close();
    reset();
  }

  function loginInputHandler(event) {
    setLogin(event.target.value);
  }

  function passwordInputHandler(event) {
    setPassword(event.target.value);
  }

  function submitHandler(event) {
    let userInfo = {
      login,
      password
    }

    if (userInfo.login == 'user' && userInfo.password == 'user') {

      props.logFlag(true);
      reset();
      close();
    }

    console.log(userInfo);

  }

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <form onSubmit={handleSubmit(submitHandler)}>
          <Modal.Header closeButton>
            <Modal.Title>Login</Modal.Title>
          </Modal.Header><Modal.Body>
            <div className="login-area">
              <label>Login
                <div>
                  <input {...register('login', { required: 'Field is required', minLength: { value: 4, message: 'Length should has at least 4 letter' } })}
                    placeholder='Your login'
                    onChange={loginInputHandler}></input>
                </div>
              </label>
              {errors?.login && <p style={{ fontSize: "small", color: "red" }} >{errors?.login?.message || 'Error'}</p>}
            </div>
            <div className="password-area">
              <div htmlFor='password'>Password</div>
              <label>
                <input {...register('password', { required: 'Field is required', minLength: { value: 4, message: 'Length should has at least 4 letter' } })}
                  type='password'
                  placeholder='Your password'
                  onChange={passwordInputHandler}></input>
              </label>
              {errors?.password && <p style={{ fontSize: "small", color: "red" }} >{errors?.password?.message || 'Error'}</p>}
            </div>
          </Modal.Body>
          <Modal.Footer>
        {flag && <div>Please create account</div>}
            <LoginBtn type='submit'>SING IN</LoginBtn>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  )
}
