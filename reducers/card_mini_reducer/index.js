const initialState = {
    cards_mini: [],
    loadingCardMini: true
}



export default (state = initialState, action) => {
    switch(action.type) {
        case 'GET_CARDS_MINI':
            return {
                ...state, 
                cards_mini: action.payload,
                loadingCardMini: false
            }
        default: return state
    }
}