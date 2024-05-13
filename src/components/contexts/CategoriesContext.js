import { useContext, useReducer, createContext } from 'react'
import CategoryReducer from '../reducers/CategoryReducer'

const CategoryContext = createContext()

export const useCategory = () => {
    return useContext(CategoryContext)
}

const initaialState = {
    data:[],
    isLoading: false,
    error: null
}

export const CategoryProvider =({ children }) => {
    const [category, categoryDispatch] = useReducer(CategoryReducer, initaialState)

    return(
        <CategoryContext.Provider value={{ category, categoryDispatch }}>
            { children }
        </CategoryContext.Provider>
    )
}