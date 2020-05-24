import {cartTypes} from "./cart.types";
import {addItemToCart} from "./cartUtils";

const INITIAL_CART_STATE = {
    hidden: true,
    cartItems: []
};

const cartReducer = (state = INITIAL_CART_STATE, action) => {
    switch (action.type) {
        case cartTypes.TOGGLE_CART_HIDDEN:
            return ({
                ...state,
                hidden: !state.hidden
            });

        case cartTypes.ADD_ITEM:
            return ({
                    ...state,
                    cartItems: addItemToCart(state.cartItems, action.payload)
                }
            )
        default:
            return state;
    }
};

export default cartReducer;