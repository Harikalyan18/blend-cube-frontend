const SpaceReducer = (space, action) => {
    switch(action.type) {
        case 'ADD_SPACE': {
            return {...space, data: [...space, action.payload]}
        }
        default: {
            return space
        }
    }
}

export default SpaceReducer
