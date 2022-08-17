import { Link } from 'react-router-dom';
import './NavArea.scss';
import NavButton from '../UI/NavButton';


function NavArea() {

    return (

        <div className="nav-area">
            <div className="left-container">
                <div className="logo-area">
                    <Link to='/'><img src="Logo.png" alt="Pokemon Logo" /></Link>

                </div>
                <NavButton to='/' >HOME</NavButton>
                <NavButton to='/about' >ABOUT US</NavButton>
                <NavButton to='/contact' >CONTACT US</NavButton>
            </div>
            <div className="right-group">
                <NavButton to='/userAccount'>LOGIN</NavButton>
            </div >
        </div >
    )
}

export default NavArea
