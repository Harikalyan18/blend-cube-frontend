import {useEffect} from 'react'
import axios from 'axios'

export default function Cancel(){
        useEffect(()=>{
            (async()=>{
                try{
                    const stripeId = localStorage.getItem('stripeId')
                    const payment = await axios.put(`http://localhost:3010/api/payments/${stripeId}/failed`,{paymentStatus:"Failed"})
                    console.log(payment.data, 'cancel')
                }catch(err){
                    console.log(err)
                }
            })()
        },[])
    return (
        <div>
        
        </div>
    )
}