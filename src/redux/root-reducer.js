import {combineReducers} from "redux";
import cartReducer from "./cart/cart.reducer"
import {persistReducer} from "redux-persist";//for storage
import storage from "redux-persist/lib/storage";//for storage
import  homeReducer from "./home/home.reducer"
const persistConfig ={
    key:"root",
    storage,
    whitelist:["cart"]
}



const rootReducer = combineReducers({
    cart: cartReducer,
    home : homeReducer
})

export default persistReducer(persistConfig,rootReducer) 