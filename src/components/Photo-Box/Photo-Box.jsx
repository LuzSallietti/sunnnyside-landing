import './photo-box.scss';

const PhotoBox = props => {
    let {src,alt, location, dataAos, dataDelay} = props;
    return <div className={`photo-box-${location}`}>
        <picture>
            <source media="(max-width:1023px)" srcset={src[1]}/>
            <img src={src[0]} alt={alt} data-aos={dataAos} data-aos-delay={dataDelay}></img>
        </picture>       
    </div>
}
PhotoBox.defaultProps = {
    src: ["https://via.placeholder.com/300"],
    alt: "no alt text"
}
export default PhotoBox;