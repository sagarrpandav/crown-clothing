export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(cartItem => {
        return cartItem.id === cartItemToAdd.id;
    });

    if (existingCartItem) {
        return cartItems.map(cartItem => {
            if (cartItem.id === cartItemToAdd.id) {
                return {...cartItem, quantity: cartItem.quantity + 1};
            } else {
                return cartItem;
            }
        })
    } else {
        return [...cartItems, {...cartItemToAdd, quantity: 1}];
    }
};

export const clearItemFromCart = (cartItems, itemToRemove) => {
    cartItems = cartItems.filter(item => {
        return item.id !== itemToRemove.id;
    });
    return cartItems;
};

export const removeItemFromCart = (cartItems, itemToRemove) => {
    const existingCartItem = cartItems.find((item) => {
        return item.id === itemToRemove.id;
    });

    if (existingCartItem.quantity === 1) {
        return clearItemFromCart(cartItems, itemToRemove);
    } else {
        return cartItems.map((item) => {
            if (item.id === itemToRemove.id) {
                return {...item, quantity: item.quantity - 1};
            }
            return item;
        })
    }
};