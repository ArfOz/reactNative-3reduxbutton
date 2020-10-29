const reducer=(state, action) => {
    switch (action.type){
        case "pink":
            state.renk = action.payload.color
        case "red":
            state.renk = action.payload.color
            
        case "yellow":
            state.renk = action.payload.color
        case "black":
            state.renk = action.payload.color
        default:
            return state;

    }
}
export {reducer}