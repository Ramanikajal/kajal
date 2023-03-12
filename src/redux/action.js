// import * as actiontype from "../ACTIONTYPE"

import { ADDMEDICINE, DELETMEDICEN, EDITMEDICEN, } from '../redux/Actiontype'

export const addMedicines = (data) => {
    console.log(data);
    return {
        type: ADDMEDICINE,
        payload: data,


    }
}
export const deletmedicensdata = (data) => {
    return {
        type: DELETMEDICEN,
        payload: data,
    }
}
export const editmedicensdata = (data) => {
    return {
        type: EDITMEDICEN,
        payload: data,
    }
}