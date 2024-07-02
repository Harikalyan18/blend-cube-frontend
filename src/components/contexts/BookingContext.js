import { useReducer, useContext, createContext } from 'react'

const bookingContext = createContext()

const useBooking = () => {
    return useContext(bookingContext)
}