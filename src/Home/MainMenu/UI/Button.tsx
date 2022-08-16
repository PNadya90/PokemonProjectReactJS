import { Link, useMatch } from 'react-router-dom';
import './Button.scss';

function Button(props: any) {
  const match = useMatch(props.to)
  console.log({ match });

  return (
    <Link to={props.to}
      className="btn btn--stripe btn--radius"
      style={{background: match ? '#ffcc01':'white'}}
      >
      {props.children}
    </Link>
  )
}

export default Button
