import Button from './Button';
import './NavArea.scss';


function NavArea() {
  
    return (

        <div className="nav-area">
            <div className="left-container">
                <div className="logo-area">
                    <img src="Logo.png" alt="Pokemon Logo" />
                </div>
                <Button to='/' >HOME</Button>
                <Button   to='/about' >ABOUT</Button>
                <Button  to='/contact' >CONTACT</Button>
            </div>
            <div className="right-group">
                <Button to='/userAccount'>LOGIN</Button>
            </div >
        </div >
    )
}

export default NavArea
