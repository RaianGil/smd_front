import TYPES from "../types"

const initState = {
    BotDT: []
}

const DTBotReducer= (state = initState, action:any) => {
    switch(action.type){
        case TYPES.DELETE_API_DTBOT: {
            console.log("Borrado DTBot")
            return ''
        }
        case TYPES.GET_API_DTBOT: {
            console.log("Recibiendo DTBot")
            return ''
        }
        case TYPES.POST_API_DTBOT: {
            console.log("Agregando DTBot")
            return ''
        }
        case TYPES.PUT_API_DTBOT: {
            console.log("Modificando DTBot")
            return ''
        }
        default:
            return state
    }
}

export default DTBotReducer