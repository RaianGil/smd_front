import TYPES from "../types"

const initState = {
    ConfigST: []
}

const STConfigReducer = (state = initState, action:any) => {
    switch(action.type){
        case TYPES.DELETE_API_STCONFIG: {
            console.log("Borrado STConfig")
            return ''
        }
        case TYPES.GET_API_STCONFIG: {
            console.log("Recibiendo STConfig")
            return ''
        }
        case TYPES.POST_API_STCONFIG: {
            console.log("Agregando STConfig")
            return ''
        }
        case TYPES.PUT_API_STCONFIG: {
            console.log("Modificando STConfig")
            return ''
        }
        default:
            return state
    }
}

export default STConfigReducer