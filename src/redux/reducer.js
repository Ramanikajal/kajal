import { ADDMEDICINE, DELETMEDICEN, EDITMEDICEN, } from '../redux/Actiontype'
const initilState = {
    data: []
}

 export const addMedicedatare = (state = initilState, action) => {
    console.log(state,action);
    if (action.type === ADDMEDICINE) {
        const data = state.data
        data.push(action.payload)
        console.log(data);
        return { ...state, data }
    }
    if (action.type === DELETMEDICEN) {
        const data = state.data.filter((i) => i.id !== action.payload)
        return { ...state, data }
    }
    if (action.type === EDITMEDICEN) {
        const data = state.data.map((i) => {
            if (i.id === action.payload.id) {
                i = action.payload

            }
            return i
        })
        return { ...state, data }

    }
    else {
        return state
    }
}
export default addMedicedatare