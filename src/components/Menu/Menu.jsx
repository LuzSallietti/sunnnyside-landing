import './menu.scss'

const Menu = props => {    
    return <ul className={`menu-${props.position}`}>
    {props.menu.map((el,i) => {
        return <li key={i}><a href={`/#${el}`.toLowerCase()}>{el}</a></li>
    })}
    </ul>
}
Menu.defaultProps={
    menu: ["Link1", "Link2", "Link3"]
}
export default Menu;