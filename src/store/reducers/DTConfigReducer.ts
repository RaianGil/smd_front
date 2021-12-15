import TYPES from "../types"
import GETServer from "../dispatchs/DTConfigDispatch";

const DTConfigReducer = (state = [], action:any) => {
    switch(action.type){
        case TYPES.DELETE_API_DTCONFIG: {
            console.log("Borrado DTConfig")
            return {
                state: action.ConfigDT
            }
        }
        case TYPES.GET_API_DTCONFIG: {
            console.log("Recibiendo DTConfig")
            return action.ConfigDT
        }
        case TYPES.POST_API_DTCONFIG: {
            console.log("Agregando DTConfig")
            return ''
        }
        case TYPES.PUT_API_DTCONFIG: {
            console.log("Modificando DTConfig")
            return ''
        }
        default:
            return null
    }
    
}

export default DTConfigReducer