import React, {useEffect, useState} from "react";
import { DTConfig } from "../models/DTConfig";
import * as DTConfigService from "../controllers/DTConfigService";
import Loading from "../components/Loading";
import Pru1 from "./Pru1";

const Test = ({ConfigList}:any) =>{
    const [loading, setLoading] = useState(true)
    const [dtConfigs, setdtConfigs] = useState<DTConfig[]>([])
    //
    const loadDTConfig = async () =>{
        const res = await DTConfigService.getDTConfig();
        setdtConfigs(res.data)
        setLoading(false)
    }
    //
    useEffect(()=>{
        loadDTConfig();
    },[]);
    //
    if (loading)
        return (
            <Loading />
        )
    return( <Pru1 model={dtConfigs}/> )
}

export default Test