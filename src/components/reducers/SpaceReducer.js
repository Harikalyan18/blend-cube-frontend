const SpaceReducer = (spaces, action) => {
    switch(action.type) {
        case 'LOADING':
            return {
                ...spaces,
                isLoading: true,
                error: null
            };
        case 'ADD_SPACE': {
            return {...spaces, data: [...spaces.data, action.payload]}
        }
        case 'SET_SPACES': {
            return { ...spaces, data: action.payload }
        }
        case 'UPDATE_SPACE': {
            return { ...spaces, data: spaces.data.map((ele) => {
                if(ele._id === action.payload._id) {
                    return action.payload
                } else {
                    return ele
                }                  
            })}
        }
        case 'DELETE_SPACE': {
            return { ...spaces, data: spaces.data.filter(ele => ele._id !== action.payload._id)}
        }
        case 'ERROR':
            return {
                ...spaces,
                isLoading: false,
                error: action.payload
            };
        default: {
            return spaces
        }
    }
}

export default SpaceReducer
