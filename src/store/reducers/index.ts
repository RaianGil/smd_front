import { combineReducers } from "redux"
import DTBotReducer from "./DTBotReducer"
import DTConfigReducer from "./DTConfigReducer"
import STBotReducer from "./STBotReducer"
import STConfigReducer from "./STConfigReducer"

const reducers = combineReducers({
    DTBot: DTBotReducer,
    DTConfig: DTConfigReducer,
    STBot: STBotReducer,
    STConfig: STConfigReducer
})

export default reducers