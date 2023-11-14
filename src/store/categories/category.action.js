import { CATEGORIES_ACTION_TYPES } from "./category.types";
import { createAction, withMatcher } from "../../utils/reducer/reducer.utils";

export const fetchCategoriesStart = withMatcher(() =>
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START)
);

export const fetchCategoriesSuccess = withMatcher((categoriesArray) =>
  createAction(
    CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS,
    categoriesArray
  )
);

export const fetchCategoriesFailed = withMatcher((error) =>
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED, error)
);





