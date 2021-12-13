import { LoadDTConfig } from "../actions/DTConfigAction"
import { useDispatch } from "react-redux"
import { getDTConfig } from "../../controllers/DTConfigService"


const GETServer = async() => {
    let dispatch = useDispatch()
    let data = await getDTConfig()
    const DispatchValues = LoadDTConfig(data)
    dispatch(DispatchValues)
    return true
}

export default GETServer
