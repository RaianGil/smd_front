import React from "react";
import { connect } from 'react-redux'
import { DTConfig } from "../models/DTConfig";
import Test from "./Test";

const ConfigList = () => (
  <div className="">
    <Test />
  </div>
)

const mapState = (state:any)=> ({
    ConfigList: state.configDT
})

const mapDispatch = (dispatch:any) => ({
    getServerConfig(serverDTConfig:DTConfig[]) {
        dispatch({
            type: "SET_SERVER_DTCONFIG",
            serverDTConfig
        })
    }
})


export default connect(mapState, mapDispatch)(ConfigList)