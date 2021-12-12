import { createStore } from "redux"
import { composeWithDevTools } from 'redux-devtools-extension';
import { DTConfig } from "./models/DTConfig";

const initStatemant = {
    ConfigDT: []
}

const reduxBot = (state = initStatemant, action:any) => {
    
    if(action.type === "HOLA_MUNDO"){
        return{
            ...state,
            ConfigDT: action.data
        }
    }
    return state
}
export default createStore(reduxBot, composeWithDevTools())