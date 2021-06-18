<<<<<<< HEAD
import { createSelector } from 'reselect';
=======
import { createSelector } from 'reselect'
>>>>>>> f2ff671 (updated)

const selectCart = state => state.cart;


export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems
)

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems =>
        cartItems.reduce(
            (accumulatedQuantity, cartItem) => 
            accumulatedQuantity + cartItem.quantity,
            0
        ),
)