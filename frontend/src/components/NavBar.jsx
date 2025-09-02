import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand"><h1>Movie App</h1></div>
      <div className="navbar-links">
        <Link to="/" className="nav-link">
          Home
        </Link> <br/>
        <Link to="/favorites" className="nav-link">
          Favorites
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
