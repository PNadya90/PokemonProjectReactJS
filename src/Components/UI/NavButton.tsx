import { NavLink, useMatch } from 'react-router-dom';
import './NavButton.scss';

const setActive = ({ isActive }: any) => isActive ? 'btn btn--stripe btn--radius btn--active':'btn btn--stripe btn--radius'

function NavButton(props: any) {
  const match = useMatch(props.to);
 
  return (
    <NavLink to={props.to}
      className={setActive}
      {...props}
      style={{
        backgroundColor: match? '#ffcc01':'white'
      }}>{props.children}
    </NavLink>
  )
}

export default NavButton
