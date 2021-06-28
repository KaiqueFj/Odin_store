import {createSelector} from 'reselect';


//redux to render the products
const selectShop = state => state.shop;

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
)