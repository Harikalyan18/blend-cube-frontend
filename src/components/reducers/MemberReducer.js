const MemberReducer = (member, action)=> {
    switch(action.type) {
        case 'ADD_MEMBER_DETAILS': {
            return { ...member, data: action.payload }
        }
        case 'SET_MEMBERS': {
            return { ...member, data: action.payload }
        }
        case 'UPDATE_MEMBER_DETAILS': {
            return { ...member, data: action.payload }
            // return { 
            //     ...member, 
            //     data: { 
            //         ...member.data, 
            //         personalDetails: { 
            //             ...member.data.personalDetails, 
            //             ...action.payload.personalDetails 
            //         } 
            //     }
            //     // return { ...state, data: action.payload };
            // }
        }
        // case 'REMOVE_MEMBER_DETAILS': {
        //     return { ...member, data: action.payload }
        // }
        default: {
            return member
        }
    }
} 

export default MemberReducer