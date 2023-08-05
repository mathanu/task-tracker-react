
import Popup from "./Popup";
const Header = ({title, onChangeTask}) => {
    return (
        <header className="header">
            <h1>{title}</h1>
           <Popup onchangetask={onChangeTask}/>
        </header>
    )
}

export default Header;