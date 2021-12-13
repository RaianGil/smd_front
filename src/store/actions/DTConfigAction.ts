import TYPES from "../types";
import { DTConfig } from "../../models/DTConfig";

export const LoadDTConfig = (ConfigDT:any) =>{
    return {
        type: TYPES.GET_API_DTCONFIG,
        ConfigDT: ConfigDT
    }
}

