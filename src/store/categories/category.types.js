export const CATEGORIES_ACTION_TYPES = {
    FETCH_CATEGORIES_START: 'category/FETCH_CATEGORIES_START',
    FETCH_CATEGORIES_SUCCESS: 'category/FETCH_CATEGORIES_SUCCESS',
    FETCH_CATEGORIES_FAILED: 'category/FETCH_CATEGORIES_FAILED',
  };
  
  export const CategoryItem = {
    id: 0,
    imageUrl: '',
    name: '',
    price: 0,
  };
  
  export const Category = {
    title: '',
    imageUrl: '',
    items: [],
  };
  
  export const CategoryMap = {};