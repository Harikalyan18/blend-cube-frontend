import { useContext, useReducer, createContext } from 'react'
import MemberReducer from '../reducers/MemberReducer'

const MemberContext = createContext()

export const useMember = () => {
    return useContext(MemberContext)
}

const initialState = {
    data: [],
    isLoading: false,
    error: null
}

export const MemberProvider = ({ children }) => {
    const[member, memberDispatch] = useReducer(MemberReducer, initialState)

    console.log('member', member )

    return (
        <MemberContext.Provider value={{ member, memberDispatch}}>
            { children }
        </MemberContext.Provider>
    )
}