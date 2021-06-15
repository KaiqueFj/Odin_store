export const addItemToCart = (cartItems, carItemToAdd) => {
    const existingCartItems =
        cartItems.find(
            cartItem => cartItem.id === carItemToAdd.id
        );

    // Will mapthrough the  cart and add the products 
    if (existingCartItems) {
        return cartItems.map(cartItem =>
            cartItem.id === carItemToAdd.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
        )
    }

    return [...cartItems, { ...carItemToAdd, quantity: 1 }]
}