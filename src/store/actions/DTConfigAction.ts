import TYPES from "../types";

export const LoadDTConfig = (ConfigDT:any) =>{
    return {
        type: TYPES.GET_API_DTCONFIG,
        ConfigDT: ConfigDT
    }
}

