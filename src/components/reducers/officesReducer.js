const OfficesReducer = (offices, action) => {
    console.log(action.payload)
    switch(action.type) {
        case 'LOADING':
            return {
                ...offices,
                isLoading: true,
                error: null
            };
        case 'SET_OFFICES': {
            return { ...offices, data: action.payload }
        }
        case 'ADD_OFFICE': {
            return { ...offices, data: [...offices.data, action.payload]}
        }
        case 'UPDATE_OFFICE': {
            console.log('action' , action.payload)
            return { ...offices, data: offices.data.map((ele) => {
                if(ele._id === action.payload._id) {
                    return action.payload
                } else {
                    return ele
                }                   
            })}
        }
        case 'DELETE_OFFICE': {
            return { ...offices, data: offices.data.filter(ele => ele._id !== action.payload._id)}
        }
        case 'ERROR':
            return {
                ...offices,
                isLoading: false,
                error: action.payload
            };
        default: {
            return offices
        }
    }
}
export default OfficesReducer