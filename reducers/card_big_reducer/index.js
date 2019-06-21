const initialState = {
    cards_big: [],
    loadingCardBig: true
}



export default (state = initialState, action) => {
    switch(action.type) {
        case 'GET_CARDS_BIG':
            return {
                ...state, 
                cards_big: action.payload,
                loadingCardBig: false
            }
        default: return state
    }
}