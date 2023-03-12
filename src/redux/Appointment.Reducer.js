const initalState = {
    Appdata : []
}

const appDelta = (state = initalState , action) => {
    console.log(action);
    if(action.type === 'ADDMEDICINE') {
        return { ...state , Appdata : [...state.Appdata,action.payload]}
    }
    console.log(Appdata);
    return state
}
export default appDelta