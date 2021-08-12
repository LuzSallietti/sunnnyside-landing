import './logo.scss';

const Logo = props => {
    return <div className="logo">
        <img src={props.src} alt={props.alt}></img>
    </div>
}
Logo.defaultProps = {
    src: "https://via.placeholder.com/100",
    alt: "No alt text"
}
export default Logo;