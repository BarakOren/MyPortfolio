export const toggleMenu = () => ({
    type: "TOGGLE_MENU"
})

const INITIAL_STATE = {
    menu: false
}

export const menuReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case "TOGGLE_MENU":
            return {
                ...state,
                menu: !state.menu
            }
        default:
            return state;
    }
}
