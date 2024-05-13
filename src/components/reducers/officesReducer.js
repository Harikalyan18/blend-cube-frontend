const OfficesReducer = (office, action) => {
    switch(action.type) {
        case 'SET_OFFICES': {
            return { ...office, data: action.payload }
        }
        case 'ADD_OFFICE': {
            return { ...office, data: [...office.data, action.payload]}
        }
        default: {
            return office
        }
    }
}
export default OfficesReducer