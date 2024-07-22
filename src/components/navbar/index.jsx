import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../../context";
import './Navbar.css';  // Import your CSS file for styling
import logo from './kvnt.jpg';  // Adjust the path to your logo file

export default function Navbar() {
  const { searchParam, setSearchParam, handleSubmit } = useContext(GlobalContext);

  console.log(searchParam);

  return (
    <nav className="navbar flex justify-between items-center py-8 container mx-auto flex-col lg:flex-row gap-5 lg:gap-0">
      <h2 className="text-2xl font-semibold flex items-center">
        <a href="/" className="flex items-center">
          <img src={logo} alt="Logo" className="h-navbar-logo mr-2" />  {/* Adjust height here */}
          <span>FoodRecipe --> KVNT Insights</span>
        </a>
      </h2>
      <form onSubmit={handleSubmit} className="navbar-form">
        <input
          type="text"
          name="search"
          value={searchParam}
          onChange={(event) => setSearchParam(event.target.value)}
          placeholder="Enter Items..."
          className="search-input"
        />
      </form>
      <ul className="flex gap-5">
        <li>
          <NavLink
            to={"/"}
            className="navbar-link"
            activeClassName="active-link"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/favorites"}
            className="navbar-link"
            activeClassName="active-link"
          >
            Favorites
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
