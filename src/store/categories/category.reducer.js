import { fetchCategoriesStart, fetchCategoriesSuccess, fetchCategoriesFailed } from './category.action';

export const CATEGORIES_INITIAL_STATE = {
    categories: [],
    isLoading: false,
    error: null,
};

export const categoriesReducer = (
    state = CATEGORIES_INITIAL_STATE,
    action
) => {
    if (fetchCategoriesStart.match(action)) {
        return { ...state, isLoading: true };
    }

    if (fetchCategoriesSuccess.match(action)) {
        return { ...state, categories: action.payload, isLoading: false };
    }

    if (fetchCategoriesFailed.match(action)) {
        return { ...state, error: action.payload, isLoading: false };
    }

    return state;
};