import { createSelector } from 'reselect';

import { CategoriesState } from './category.reducer';
import { CategoryMap } from './category.reducer';

const selectCategoryReducer = (state: RootState): CategoriesState => state.categories;

export const selectCategories = createSelector(
    [selectCategoryReducer],
    (categoriesReducer) => categoriesReducer.categories
);

export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories): CategoryMap =>
    categories.reduce((acc, category) => {
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {} as CategoryMap)
); 

export const selectCategoriesIsLoading = createSelector(
  [selectCategoryReducer],
  (categorySlice) => categorySlice.isLoading
);
 
