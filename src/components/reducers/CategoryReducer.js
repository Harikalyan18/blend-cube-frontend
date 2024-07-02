const CategoriesReducer = (categories, action) => {
    switch(action.type) {
        case 'ADD_CATEGORY': {
            return {...categories, data:[...categories, action.payload]}
        }
        case 'SET_CATEGORIES': {
            return { ...categories, data: action.payload }
        }
        default: {
            return categories
        }
    }
}

export default CategoriesReducer