import "./Header.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="header">
      <Link style={{textDecoration:"none",color:"pink"}}  to="/">Home</Link>
      <Link style={{textDecoration:"none",color:"pink"}} to="/cart">Favorite</Link>
    </div>
  );
};

export default Header;