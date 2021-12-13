import axios from "axios"
import { DTBot } from "../models/DTBot"

const API = 'http://localhost:5000/api/DT/bot'
export const getDTBot = async () => {
    return await axios.get<DTBot[]>(API)
}