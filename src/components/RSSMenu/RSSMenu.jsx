import './RSSmenu.scss';

const RSSMenu = props => {
    let {anchors} = props;
    return <ul className="rss-menu">
    {anchors.map((el, i)=> {
        return <li key={i}><a href={el.href}><i className={el.icon}></i></a></li>
    })}
    </ul>
}
export default RSSMenu;