const initialState = {
    contacts: [],
    loadingContacts:true
}


export default (state = initialState, action) => {
    switch(action.type) {
        case 'GET_CONTACTS':
            return {
                ...state,
                contacts: action.payload,
                loadingContacts: false
            }
        default: return state;
    }
}