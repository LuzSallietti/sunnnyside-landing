import './contact.scss';
import '../assets/scss/helpers/animations.scss';
import logo from '../assets/images/logo.svg';
import Logo from '../components/Logo/Logo';
import ContactForm from "../components/Form/Form";
import { Link } from 'react-router-dom';

const Contact = () => {    

    return <>
        <main className="contact-main fadeIn">
            <header className="main-header">
                <nav className="header-nav">
                    <Link to="/">
                    <Logo src={logo} alt="logo" />
                    </Link>
                </nav>
            </header>        
            <ContactForm/>       
        </main>    
    </>
}
export default Contact;