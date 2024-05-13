const CategoryReducer = (category, action) => {
    switch(action.type) {
        case 'ADD_CATEGORY': {
            return {...category, data:[...category, action.payload]}
        }
        default: {
            return category
        }
    }
}

export default CategoryReducer