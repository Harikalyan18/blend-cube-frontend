import { useContext, useReducer, createContext, useEffect } from "react";
import SpaceReducer from "../reducers/SpaceReducer";
import axios from 'axios'

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
    const [spaces, spacesDispatch] = useReducer(SpaceReducer, initialState)

        useEffect(() => {
            (async() => {
                spacesDispatch({ type: 'LOADING' });
                try {
                    const response = await axios.get('http://localhost:3010/api/spaces', {
                        headers: {
                          Authorization: localStorage.getItem('token')
                        }
                      })
                      console.log(response.data)
                      spacesDispatch({ type: 'SET_SPACES', payload: response.data})
                } catch(err) {
                    console.log(err)
                    spacesDispatch({ type: 'ERROR', payload: err });
                }
            })();
          }, [spacesDispatch])

    return (
        <SpaceContext.Provider value={{ spaces, spacesDispatch }}>
            { children}
        </SpaceContext.Provider>
    )
    
}