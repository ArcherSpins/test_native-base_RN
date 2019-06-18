const initialState = {
    courses: {},
    activeCourses: {},
    loading: true,
    activeArray: [],
    errorLoading: false,
    loadingHomePage: true
}

export default (state = initialState, action) => {
    switch(action.type) {
        case 'GET_COURSES':
            return {
                ...state,
                courses: action.payload,
                loading: false,
                errorLoading: false
            }
        case 'GET_ERROR':
            return {
                ...state,
                courses: {},
                errorLoading: true,
                loading: false
            }
        case 'ON_ACTIVETE':
            const activeArray = []

            for(let obj in state.courses.data) {
                if(state.courses.data[obj].active) activeArray.push('active')
                if(activeArray.length > 1) {
                    state.courses.data[obj].active = !state.courses.data[obj].active
                    break;
                }
            }

            const title = action.payload;
            const obj = state.courses.data.find(item => item.title === title)
            const idx = state.courses.data.findIndex(item => item.title === title)
            obj.active = !obj.active;
            const newData = [...state.courses.data.slice(0, idx), obj, ...state.courses.data.slice(idx+1)];


            return {
                ...state,
                loading: false,
                errorLoading: false,
                courses: {
                    ...state.courses,
                    data: newData
                }
            }
        case 'SET_COURSES':
            return {
                ...state,
                activeCourses: action.payload.data,
                activeArray: action.payload.mass,
                loadingHomePage: false,
                errorLoading: false
            }
        default: return state;
    }
}