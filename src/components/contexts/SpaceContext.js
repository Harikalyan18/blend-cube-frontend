import { useContext, useReducer, createContext } from "react";
import SpaceReducer from "../reducers/SpaceReducer";

const SpaceContext = createContext()

export const useSpace = () => {
    return useContext(SpaceContext)
}

const initialState = {
    data: [],
    isLoading: false, 
    error: null
}

export const SpaceProvider = ({ children }) => {
    const [space, spaceDispatch] = useReducer(SpaceReducer, initialState)
        console.log(space)
    return (
        <SpaceContext.Provider value={{ space, spaceDispatch }}>
            { children}
        </SpaceContext.Provider>
    )
    
}