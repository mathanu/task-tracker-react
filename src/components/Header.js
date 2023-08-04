
import Popup from "./Popup";
const Header = ({title}) => {
    return (
        <header className="header">
            <h1>{title}</h1>
           <Popup/>
        </header>
    )
}

export default Header;