import SHOP_DATA from './shop.data'

const INITIAL_STATE = {
    collections: SHOP_DATA
};

//state to the products
const shopReducer = (state = INITIAL_STATE, action) => {
    switch (action.state) {
        default:
            return state;
    }
}

export default shopReducer