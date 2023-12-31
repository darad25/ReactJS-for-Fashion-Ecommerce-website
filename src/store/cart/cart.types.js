import { CategoryItem } from "../categories/category.types";

export const CART_ACTION_TYPES = {
    SET_IS_CART_OPEN: 'cart/SET_IS_CART_OPEN',
    SET_CART_ITEMS: 'cart/SET_CART_ITEMS',
    SET_CART_COUNT: 'cart/SET_CART_COUNT',
    SET_CART_TOTAL: 'cart/SET_CART_TOTAL',
};

export const CartItem = {
    // Assuming CategoryItem has properties like id, name, price, etc.
    // Add additional properties as needed
    ...CategoryItem,
    quantity: 0,
};