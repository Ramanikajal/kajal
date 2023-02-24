import {ADDMEDICEN,DELETMEDICEN,EDITMEDICEN} from'../redux/Actiontype'
const initilState = {
    data:[]
}

const  addMedicedatare = (state = initilState, action) => {
    if (action.type === ADDMEDICEN ) {
         const data =state.data
         data.push(action.payload)
        //  console.log(data);
         return {...state , data}
    }
    if (action.type === DELETMEDICEN) {
         const data=state.data.filter((i) => i.id !==action.payload)
         return  {...state , data}
    }
    if (action.type ===EDITMEDICEN) {
        const data=state.data.map((i)=>{
            if (i.id===action.payload.id) {
                 i=action.payload
                
            }
            return i
        })
        return  {...state , data}
        
    }
    else{
        return state
    }
} 
export default addMedicedatare