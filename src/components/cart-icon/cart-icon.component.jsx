import React from "react";
import {connect} from "react-redux";
import {toggleCartHidden} from "../../redux/cart/cart.actions";
import "./cart-icon.styles.scss"
import {selectCartItemsCount} from "../../redux/cart/cart.selectors"
import {createStructuredSelector} from "reselect"
import {ReactComponent as ShopingIcon} from "../assets/shopping-bag.svg";

const CartIcon = ({toggleCartHidden, itemCount}) =>(
    <div className="cart-icon" onClick={toggleCartHidden}>
        <ShopingIcon className="shopping-icon"></ShopingIcon>
        <span className="item-count">{itemCount}</span>
    </div>
)

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () =>dispatch(toggleCartHidden())
})

const mapStateToProps = createStructuredSelector  ({
    itemCount: selectCartItemsCount
})

export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);