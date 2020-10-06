import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header_logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG25.png"
        />
      </Link>

      <div className="header__search">
        <input className="header_searchInput" type="text" />
        <SearchIcon className="header_searchIcon" />
      </div>
      <div className="header_nav">
        <Link to={!user && "/login"} style={{ textDecoration: "none" }}>
          {" "}
          <div onClick={handleAuthentication} className="header_option">
            <span className="header_optionnLineOne">
              Hello {!user ? "Guest" : user.email}
            </span>
            <span className="header_optionnLinetwo">
              {user ? "Sign out" : "Sign In"}
            </span>
          </div>
        </Link>
        <Link to="./orders" style={{ textDecoration: "none" }}>
        <div className="header_option">
          <span className="header_optionnLineOne">Returns</span>
          <span className="header_optionnLinetwo">Orders</span>
        </div></Link>

        <div className="header_option">
          <span className="header_optionnLineOne">Your</span>
          <span className="header_optionnLinetwo">Prime</span>
        </div>
        <div className="header_option">
          <Link to="/checkout" style={{ textDecoration: "none" }}>
            {" "}
            <div className="header__optionBasket">
              <ShoppingBasketIcon />
              <span className="header_optionnLinetwo header_basketCount">
                {basket?.length}
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
