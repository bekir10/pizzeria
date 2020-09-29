import SHOP_DATA from "./pizza.data"

const INITIAL_STATE ={
    collections : SHOP_DATA
}

const homeReducer = (state = INITIAL_STATE,action) =>{
    switch (action.type) {
            default:
                return state;
    }
}

export default homeReducer;