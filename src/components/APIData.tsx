import React, {useEffect, useState} from "react";
import Loading from "../components/Loading";
import { STConfig } from "../models/STConfig";
import { STBot } from "../models/STBot";
import { DTBot } from "../models/DTBot";
import * as STConfigService from "../controllers/STConfigService";
import * as STBotService from "../controllers/STBotService";
import * as DTBotService from "../controllers/DTBotService";
import STConfigList from "./STConfigList";
import STBotList from "./STBotList";
import DTBotList from "./DTBotList";

const STConfigAPI = () => {
    let [loading, setLoading] = useState(true)
    let [stConfigs, setstConfigs] = useState<STConfig[]>([])
    //
    let loadDTConfig = async () =>{
        let res = await STConfigService.getSTConfig();
        setstConfigs(res.data)
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
    //
    return( <STConfigList STConfig={stConfigs}/> )
}

const DTConfigAPI = () => {
    /*let [loading, setLoading] = useState(true)
    let [dtConfigs, setdtConfigs] = useState<DTConfig[]>([])
    //
    let loadDTConfig = async () =>{
        let res = await DTConfigService.getDTConfig();
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
    //
    return( <DTConfigList DTConfig={dtConfigs}/> )*/
}

const DTBotAPI = () => {
    let [loading, setLoading] = useState(true)
    let [dtBots, setdtBots] = useState<DTBot[]>([])
    //
    let loadDTBot = async () =>{
        let res = await DTBotService.getDTBot();
        setdtBots(res.data)
        setLoading(false)
    }
    //
    useEffect(()=>{
        loadDTBot();
    },[]);
    //
    if (loading)
        return (
            <Loading />
        )
    //
    return( <DTBotList DTBot={dtBots}/> )
}

const STBotAPI = () => {
    let [loading, setLoading] = useState(true)
    let [stBots, setstBots] = useState<STBot[]>([])
    //
    let loadSTBot = async () =>{
        let res = await STBotService.getSTBot();
        setstBots(res.data)
        setLoading(false)
    }
    //
    useEffect(()=>{
        loadSTBot();
    },[]);
    //
    if (loading)
        return (
            <Loading />
        )
    //
    return( <STBotList STBot={stBots}/> )
}

export default {
    STBotAPI,
    DTBotAPI,
    STConfigAPI,
    DTConfigAPI
}