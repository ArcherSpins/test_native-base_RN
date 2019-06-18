export const getCourses = (data) => {

    return {
        type: 'GET_COURSES',
        payload: data
    }
}

export const getError = () => {
    return {
        type: 'GET_ERROR'
    }
}

export const onActivited = (title) => {
    return {
        type: "ON_ACTIVETE",
        payload: title
    }
}

export const setActiveCourses = (data, mass) => {
    return {
        type: 'SET_COURSES',
        payload: {data, mass}
    }
}