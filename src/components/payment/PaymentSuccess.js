import {useEffect} from 'react'
import axios from 'axios'

export default function Success(){
    useEffect(()=>{
        (async()=>{
            try{
                const stripeId = localStorage.getItem('stripeId')
                const payment = await axios.put(`http://localhost:3010/api/payments/${stripeId}/success`,{paymentStatus:"Successful"})
                console.log(payment.data, 'pay')
            }catch(err){
                console.log(err)
            }
        })()
    },[])
    return (
        <div>
            <p>Payment Successfull</p>
        </div>
    )
}