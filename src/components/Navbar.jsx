import { Link } from "react-router-dom";
import Pdf from '../menu/menu.pdf'

const Navbar = () => {
    return ( 
        <div className="navbar">
            <Link to="/" className="logo"><img src={require(`../images/logo.webp`)} width="30%"/></Link>
            <ul>
                <Link to="/hours-location" className="Hours-Location"><li>HOURS & LOCATION</li></Link>
                <Link to="/Menu" className="Menu"><li>MENU</li></Link>
                <a href={Pdf} target="_blank" className="About-link"><li>MENU WITH PICTURES</li></a>
                <a href="https://bowlmenu.square.site/" target={"_blank"}><li>ORDER</li></a>
            </ul>
        </div>
     );
}
 
export default Navbar;