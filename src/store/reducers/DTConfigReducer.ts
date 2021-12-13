import TYPES from "../types"

const initState = {
    ConfigDT: []
}

const DTConfigReducer = (state = initState, action:any) => {
    switch(action.type){
        case TYPES.DELETE_API_DTCONFIG: {
            console.log("Borrado DTConfig")
            return {
                state,
                ConfigDT: action.ConfigDT
            }
        }
        case TYPES.GET_API_DTCONFIG: {
            console.log("Recibiendo DTConfig")
            return {
                state: action.ConfigDT }
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
            return state
    }
}

export default DTConfigReducer