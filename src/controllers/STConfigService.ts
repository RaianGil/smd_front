import axios from "axios"
import { STConfig } from "../models/STConfig"

const API = 'http://localhost:5000/api/ST/config'

export const getSTConfig = async () => {

    return await axios.get<STConfig[]>(API)
}