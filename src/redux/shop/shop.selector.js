import { createSelector } from 'reselect';



//redux to render the products
const selectShop = state => state.shop;

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
);

// get all the keys, and map over that array of collection (items)
export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    collections => Object.keys(collections).map(key => collections[key])
)


//map the selector
export const selectCollection = collectionUrlParam =>
    createSelector(
        [selectCollections],
        collections => collections[collectionUrlParam]
    )