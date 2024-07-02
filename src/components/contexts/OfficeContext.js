import { useContext, useReducer, createContext, useEffect } from 'react'
import OfficesReducer from '../reducers/officesReducer'
import axios from 'axios'

const OfficeContext = createContext()

export const useOffice = () => {
    return useContext(OfficeContext)
}

const initialState = {
    data: [],
    isLoading: false, 
    error: null
}

export const OfficeProvider = ({ children }) => { 
    const [ offices, officesDispatch ] = useReducer(OfficesReducer, initialState)
    console.log(offices)

    useEffect(() => {
        (async() => {
            officesDispatch({ type: 'LOADING' });
            try {
                const response = await axios.get('http://localhost:3010/api/offices')
                officesDispatch({ type: 'SET_OFFICES', payload: response.data})
            } catch(err) {
                console.log(err)
                officesDispatch({ type: 'ERROR', payload: err });
                }
            })();
        }, [])

    return( 
    <OfficeContext.Provider value={{ offices, officesDispatch }}>
        { children}
    </OfficeContext.Provider>
    )
}

