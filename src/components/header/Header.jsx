import React from "react";
import { Link } from "react-router-dom";
import { FiShoppingBag } from "react-icons/fi";
import "./header.css";
import { useSelector } from "react-redux";

const Header = () => {
  const { cart } = useSelector((state) => state.cart); //increase the shooping badge vlaue 
  return (
    <div className="Header">
      <nav>
        <div className="logo">
          <Link to={"/"}>SH Cart</Link>
        </div>
        <div className="nav-links">
          <Link to={"/"}>Home</Link>
          <Link to={"/"}>Products</Link>
          <Link to={"/cart"}>
            <FiShoppingBag />
             <p>{cart.length}</p>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;
