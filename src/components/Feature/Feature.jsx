import './feature.scss';
import { useEffect } from 'react';


const Feature = props => {
    let {title, desc, href, cta, dataAos} = props;
    
    useEffect(() => {
        console.log("feat mounted")                      
    }, []);
    
    return <div className="feature" data-aos={dataAos}>
        <div className="feature-container">
            <h2>{title}</h2>
            <p>{desc}</p>
            <a href ={href}>{cta}</a>
        </div>
    </div>
}
Feature.defaultProps = {
    title: "Feature Title",
    desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    href:"https://www.example.com",
    cta: "Call-to-action"
}
export default Feature;