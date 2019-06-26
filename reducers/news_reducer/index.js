const initialState = {
    news: [],
    loadingNews: true
}


export default (state = initialState, action) => {
    switch(action.type) {
        case 'GET_NEWS':
            return {
                ...state,
                news: action.payload,
                loadingNews: false
            }
        default: return state;
    }
}