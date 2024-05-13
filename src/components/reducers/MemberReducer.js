const MemberReducer = (member, action)=> {
    switch(action.type) {
        case 'ADD_MEMBER_DETAILS': {
            return { ...member, data: [ ...member, action.payload ]}
        }
        default: {
            return member
        }
    }
} 

export default MemberReducer