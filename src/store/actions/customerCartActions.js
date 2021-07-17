export const ADD_TO_CUSTOMER_CART = "ADD_TO_CUSTOMER_CART"
export const REMOVE_FROM_CUSTOMER_CART = "REMOVE_TO_CUSTOMER_CART"

export function addToCustomerCart(customer){
    return {
        type : ADD_TO_CUSTOMER_CART,
        payload : customer
    }
}

export function removeFromCustomerCart(customer){
    return {
        type : REMOVE_FROM_CUSTOMER_CART,
        payload : customer
    }
}