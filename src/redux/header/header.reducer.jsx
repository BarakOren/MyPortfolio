export const setHeader = title => ({
    type: "SET_HEADER",
    payload: title
})

const page = window.location.pathname;

const INITIAL_STATE = {
    header: page
}

export const headerReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case "SET_HEADER":
            return {
                ...state,
                header: action.payload
            }
        default:
            return state;
    }
}