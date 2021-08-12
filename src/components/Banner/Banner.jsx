import './banner.scss';
import { useEffect } from 'react';
import { useRef } from 'react';

const Banner = props => {
    const h1 = useRef(null);
    const arrow =  useRef(null);

    useEffect(() => {
        h1.current.style.animation = "h1appear 1.5s ease-out";       
        arrow.current.style.animation = "arrowAppear 1.5s ease-out";                       
        setTimeout(() => {
            arrow.current.style.visibility = "visible";            
        }, 1500);
        
    }, [])

    return <>
        <div className="banner">
            <picture>
                <source media="(max-width:1023px)" srcset={props.img[1]}/> 
                <img src = {props.img[0]} alt={props.alt} className="banner-img"></img>
            </picture>            
            <h1 ref={h1}>{props.title}</h1>
            <img src={props.svg} ref={arrow} alt="icon" className="banner-arrow"></img>
        </div>
    </>
}
Banner.defaultProps = {
    img:["https://via.placeholder.com/300"],
    alt:"default image",
    title:"Banner Title",
    svg:"https://via.placeholder.com/50" 
}
export default Banner;