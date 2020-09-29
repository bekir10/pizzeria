import React from "react";
import {Link} from "react-router-dom";
import {ReactComponent as Logo} from "../assets/pizza.svg";
import CartIcon from "../cart-icon/cart-icon.component";
import "./header.styles.scss"
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import {connect} from "react-redux";
import {selectCartHidden} from "../../redux/cart/cart.selectors"
import {createStructuredSelector} from "reselect"
const Header = ({hidden}) => (
    <div className="header">
        <Link to="/" className="logo-cotainer">
    <Logo className="logo">

    </Logo>
    </Link>
    <div className="options">
    <h2 className="title">PIZZERIA</h2>
    </div> 

    <CartIcon></CartIcon>

    {
        hidden ? null :  <CartDropdown></CartDropdown> // ako je hidden true render null a ako nije render cart dropdown
  
    }
    
    </div>
)

const mapStateToProps = createStructuredSelector ({
    hidden : selectCartHidden
})

export default connect(mapStateToProps)(Header);