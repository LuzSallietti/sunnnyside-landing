import './testimony.scss';

const Testimony = props => {
    let {src,alt,quote,name, job_title} = props;
    return <li className="testimony">
        <div className="testimony-img">
            <img src={src} alt={alt}></img>            
        </div>
        <p className="testimony-quote">{quote}</p>
        <span className="testimony-name">{name}</span>
        <span className="testimony-charge">{job_title}</span>
    </li>
}
Testimony.defaultProps = {
    src:"https://via.placeholder.com/75",
    alt:"no alt text",
    quote:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    name:"Person name",
    job_title:"Job Title"
}
export default Testimony;