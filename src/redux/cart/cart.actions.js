import CartActyionTypes from "./cart.types";


export const toggleCartHidden = () =>({
    type:CartActyionTypes.TOGGLE_CART_HIDDEN
})

export const addItem = item =>({
    type:CartActyionTypes.ADD_ITEM,
    payload:item
})