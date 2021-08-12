import './form.scss';
import emailjs from 'emailjs-com';
import { useRef } from 'react';
import { useHistory } from 'react-router-dom';

const ContactForm = () => {
    let confirm_modal = useRef(null)
    const history = useHistory()
       
    const redirectHome = (e) => {        
        e.target.reset()
        confirm_modal.current.style.visibility="visible"
        confirm_modal.current.style.zIndex="100"
        setTimeout(() => {            
            history.push("/")  // redirecciona al home despues de 1.7s              
        },1750)
    }

    const sendEmail = (e) => {
        e.preventDefault()
        let template_Params = {
            "from_name": e.currentTarget.name.value,
            "reply_to": e.currentTarget.email.value,
            "message": e.currentTarget.message.value
        }       
        emailjs.send('service_ga1fy5v', 'template_2l9w1nr', template_Params, 'user_EvdyyDE5sSdnDLSMv79Pc')
        .then(response => {
                if (response.status === 200) {
                    redirectHome(e);         
                }
            })
        .catch (error => {
            console.log('FAILED...', error)})
    }

    return <>
    <div className="form-confirmation" ref={confirm_modal}>
        <h3>Thank you!</h3>
        <p>Your message has been sent.</p>
    </div>    
    <form className="contactForm" onSubmit={sendEmail} method="POST">
        <h1 className="contact-title">Contact Us</h1>
        <div className="input-group">
            <label htmlFor="name">Your name *</label>
            <input type="text" required name="name" placeholder="e.g Felicity Doe"></input>
        </div>
        <div className="input-group">
            <label htmlFor="email">Your email *</label>
            <input type="email" name="email" required placeholder="e.g felicityd@aol.com"></input>
        </div>
        <div className="input-group">
            <label htmlFor="message">Leave your message *</label>
            <textarea name="message" rows="4" placeholder="Here send us your comments and doubts."></textarea>
        </div>
        <button type="submit" className="form-btn">Send</button>
    </form>    
    </>
}
export default ContactForm;