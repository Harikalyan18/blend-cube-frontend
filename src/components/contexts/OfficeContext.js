import { useContext, useReducer, createContext } from 'react'
import OfficesReducer from '../reducers/officesReducer'

const OfficeContext = createContext()

export const useOffice = () => {
    return useContext(OfficeContext)
}

const initialState = {
    data: [],
    isLoading: false, 
    error: null
}

// const officesReducer = (office, action) => {
//     switch(action.type) {
//         case 'SET_OFFICES': {
//             return { ...office, data: action.payload }
//         }
//         default: {
//             return office
//         }
//     }
// }

export const OfficeProvider = ({ children }) => { 
    const [ office, officeDispatch ] = useReducer(OfficesReducer, initialState)
    console.log(office)
    return( 
    <OfficeContext.Provider value={{ office, officeDispatch }}>
        { children}
    </OfficeContext.Provider>
    )
}

