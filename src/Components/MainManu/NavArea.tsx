import { Link } from 'react-router-dom';
import './NavArea.scss';
import NavButton from '../UI/NavButton';
import ModalWindow from '../Modal/ModalWindow';
import { useContext, useEffect, useState } from 'react';
import { ModalContext } from '../../Context/ModalContext';
import LoginBtn from '../UI/LoginBtn';


function NavArea() {
    const { show, open, close } = useContext(ModalContext);
    let [logFlag, setFlag] = useState(false);
    const manageFlag = (logFlag: boolean) => {
        setFlag(logFlag);
    }

    function logoutHandler(){
        setFlag(false);
    }

    console.log(logFlag);
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
                <LoginBtn style={logFlag?{display:'block'}:{display:'none'}}>ACCOUNT</LoginBtn>
                <LoginBtn onClick={logFlag? logoutHandler: open}>{logFlag ? 'LOGOUT' : 'LOGIN'}</LoginBtn>
            </div >
            <ModalWindow show={show} logFlag={manageFlag} ></ModalWindow>
        </div >
    )
}

export default NavArea
