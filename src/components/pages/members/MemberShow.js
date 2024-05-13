// import { useMember } from '../../contexts/MemberContext'
// import { useState } from 'react'



// export default function MemberProfile() {

//     const { member } = useMember()

//     const [editId, setEditId] = useState('')

//     const handleEdit = ( ) => {
//         setEditId(id)
//     }

//     const handleRemove = () => {

//     }

//     return (
//         <div>
//             <h2>Member Profile</h2> 
//             <ul> 
//             {member.data.map((ele) => (
//                     <div key={ele._id}>
//                         <li>{ele.fullName}</li>
//                         <li>{ele.fullAddress}</li>
//                     </div>
//                 ))}
//             </ul>

//             <button onClick={handleEdit}>Edit</button>
//             <CustomerForm editId={editId}/>
//             <button onclick={handleRemove}>Remove</button>

//         </div>
//     )
// }
 