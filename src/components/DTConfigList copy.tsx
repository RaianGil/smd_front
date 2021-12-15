import React, { useEffect, useState } from "react";
import { DTConfig } from "../models/DTConfig";
import { connect } from 'react-redux'
import GETServer from "../store/dispatchs/DTConfigDispatch";

const DTConfigList = ({ConfigList}:any) =>{
  GETServer()
  return(
      <div className="">
          {
              ConfigList
          }
      </div>
)}


const mapState = async (state:any)=> {
  alert()
  return {
    ConfigList: state.DTConfig.state
  }
}

const mapDispatch = (dispatch:any) => ({

})


export default connect(mapState, mapDispatch)(DTConfigList)