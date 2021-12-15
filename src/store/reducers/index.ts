import { combineReducers } from "redux"
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import DTBotReducer from "./DTBotReducer"
import DTConfigReducer from "./DTConfigReducer"
import STBotReducer from "./STBotReducer"
import STConfigReducer from "./STConfigReducer"

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['DTConfig']
}

const reducers = combineReducers({
    DTBot: DTBotReducer,
    DTConfig: DTConfigReducer,
    STBot: STBotReducer,
    STConfig: STConfigReducer
})

export default persistReducer(persistConfig, reducers)