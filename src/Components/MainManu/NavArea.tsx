import { Link } from 'react-router-dom';
import './NavArea.scss';
import NavButton from '../UI/NavButton';
import { Modal } from 'react-bootstrap';
import ModalWindow from '../Modal/ModalWindow';
import { useContext } from 'react';
import { ModalContext } from '../../Context/ModalContext';
import LoginBtn from '../UI/LoginBtn';


function NavArea() {
    const { show, open, close } = useContext(ModalContext);
 
    return (

        <div className="nav-area">
            <div className="left-container">
                <div className="logo-area">
                    <Link to='/'><img src="/Logo.png" alt="Pokemon Logo" /></Link>

                </div>
                <NavButton to='/' >HOME</NavButton>
                <NavButton to='/about' >ABOUT US</NavButton>
                <NavButton to='/contact' >CONTACT US</NavButton>
            </div>
            <div className="right-group">
                <LoginBtn onClick={open}>LOGIN</LoginBtn>
            </div >
            <ModalWindow show={show}></ModalWindow>
        </div >
    )
}

export default NavArea
