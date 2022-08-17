import { Link, NavLink, useMatch } from 'react-router-dom';
import './NavButton.scss';

function NavButton(props: any) {
  const match = useMatch(props.to);
  return (
    <NavLink to={props.to}
      className="btn btn--stripe btn--radius"
      style={{background: match ? '#ffcc01':'white'}}
      >
      {props.children}
    </NavLink>
  )
}

export default NavButton
