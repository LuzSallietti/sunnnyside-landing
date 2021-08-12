import './services.scss';

const Services = props => {
    let {title, desc, src, alt, color, dataAos, dataDelay} = props;
    return <li className="service" data-aos={dataAos} data-aos-delay={dataDelay}>
                <div className="service-img">
                    <picture>
                        <source media="(max-width:1023px)" srcset={src[1]}/>
                        <img src= {src[0]} alt={alt}></img>
                    </picture>
                    
                </div>
                <div className="service-desc">
                    <h3 className={color}>{title}</h3>
                    <p className={color}>{desc}</p>
                </div>            
           </li>
}
Services.defaultProps = {
    title:"Service Title",
    desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    src:["https://via.placeholder.com/300"],
    alt:"No alt text"
}
export default Services;