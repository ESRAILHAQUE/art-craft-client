import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { CgProfile } from "react-icons/cg";

const Header = () => {
  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/allArtAndCrafts">All Art & craft Items</NavLink>
      </li>
      <li>
        <NavLink to="/addCraftItem">Add Craft Item</NavLink>
      </li>
      <li>
        <NavLink to="/artAndCraftListPage">My Art&Craft List</NavLink>
      </li>
      <li>
        <NavLink to="/aboutus">About Us</NavLink>
      </li>
      <li>
        <NavLink to="/contactUs">Contact Us</NavLink>
      </li>
    </>
  );

  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => console.log("log out successful"))
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow  bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl hidden md:block lg:block">
            
            Jute & Wooden Craft
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal space-x-3 px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <>
              <div className="tooltip" data-tip={user.email}>
                <button className="btn">
                  <img className="rounded-full w-12 h-12" src={user?.photoURL} alt="" />
                </button>
              </div>
              <button onClick={handleLogOut} className="btn btn-accent">
                Log Out
              </button>
            </>
          ) : (
            <Link to="/login">
              <button className="btn btn-accent">LogIn</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
