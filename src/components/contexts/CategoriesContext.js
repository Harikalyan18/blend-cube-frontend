import { useContext, useReducer, createContext, useEffect } from 'react'
import CategoriesReducer from '../reducers/CategoryReducer'
import axios from 'axios'

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
    const [categories, categoriesDispatch] = useReducer(CategoriesReducer, initaialState)

    useEffect(() => {
        (async () => {
          try {

            const response = await axios.get('http://localhost:3010/api/categories', {
              headers: {
                'Authorization': localStorage.getItem('token')
              }
            });
            categoriesDispatch({ type: 'SET_CATEGORIES', payload: response.data });
          } catch (err) {
            categoriesDispatch({ type: 'ERROR', payload: err });
          }
        })();
      }, [categoriesDispatch]);

    return(
        <CategoryContext.Provider value={{ categories, categoriesDispatch }}>
            { children }
        </CategoryContext.Provider>
    )
}