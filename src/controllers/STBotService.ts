import axios from "axios"
import { STBot } from "../models/STBot"

const API = 'http://localhost:5000/api/ST/bot'

export const getSTBot = async () => {
    return await axios.get<STBot[]>(API)
}