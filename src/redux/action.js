// import * as actiontype from "../ACTIONTYPE"
import { ADDMEDICEN,DELETMEDICEN, EDITMEDICEN,} from '../redux/Actiontype'

export const addmedicendata=(data)=>{
    return{
         type:ADDMEDICEN,
         payload: data,
         
         
    }
}
export const deletmedicensdata = (data) =>{
    return{
        type:DELETMEDICEN,
        payload:data,
    }
}
export const editmedicensdata = (data) =>{
    return{
        type:EDITMEDICEN,
        payload:data,
    }
}