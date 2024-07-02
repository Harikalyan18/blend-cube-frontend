import { useReducer, useContext, createContext } from 'react'
import PaymentsReducer from '../reducers/PaymentsReducer'

const PaymentContext = createContext()

export const usePayment = () => {
    return useContext(PaymentContext)
}

const initialState = {
    data:[],
    isLoading: false,
    error: null
}

export const PamentProvider = async() => {
    const [payments, paymentsDispatch] = useReducer(PaymentsReducer, initialState)

    return(
        <PaymentContext value={{payments, paymentsDispatch}}>
            { children }
        </PaymentContext>
    )
}

