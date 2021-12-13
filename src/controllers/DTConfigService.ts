import axios from "axios"
import { DTConfig } from "../models/DTConfig"

const API = 'http://localhost:5000/api/DT/config'

export const getDTConfig = async () => {
    return await axios.get<DTConfig[]>(API)
    .then(res=> res.data)
    .catch(err => [])
}
