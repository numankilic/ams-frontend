import { customerCartItems } from "../initialValues/customerCartItems"
import { ADD_TO_CUSTOMER_CART, REMOVE_FROM_CUSTOMER_CART } from "../actions/customerCartActions"
const initialState = {
    customerCartItems: customerCartItems
}

export default function customerCartReducer(state = initialState, { type, payload }) {
    switch (type) {
        case ADD_TO_CUSTOMER_CART:
            return {
                ...state,
                customerCartItems: [...state.customerCartItems, payload]
            }
        case REMOVE_FROM_CUSTOMER_CART:
            return {
                ...state,
                customerCartItems: state.customerCartItems.filter(c => c.customer.passportNumber !== payload.passportNumber)
            }

        default:
            return state;
    }
}