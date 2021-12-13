import TYPES from "../types"

const initState = {
    BotST: []
}

const STBotReducer = (state = initState, action:any) => {
    switch(action.type){
        case TYPES.DELETE_API_STBOT: {
            console.log("Borrado STBot")
            return ''
        }
        case TYPES.GET_API_STBOT: {
            console.log("Recibiendo STBot")
            return ''
        }
        case TYPES.POST_API_STBOT: {
            console.log("Agregando STBot")
            return ''
        }
        case TYPES.PUT_API_STBOT: {
            console.log("Modificando STBot")
            return ''
        }
        default:
            return state
    }
}

export default STBotReducer