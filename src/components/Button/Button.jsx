import './button.scss';
import { Link } from 'react-router-dom';

const Button = props => {
    return <Link className="btn" to={props.href}>{props.cta}</Link>
}
Button.defaultProps = {
    href:"https://www.example.com",
    cta: "Call-to-action"
}
export default Button;