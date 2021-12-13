import React, { useEffect, useState } from "react";
import { DTConfig } from "../models/DTConfig";
import { connect } from 'react-redux'
import GETServer from "../store/dispatchs/DTConfigDispatch";

const DTConfigList = ({ConfigList}:any) =>{
  GETServer()
  return(
      <div className="">
          {
              ConfigList.map((Config:DTConfig) => (
                  <div className="" key={Config._id}>
                      <label htmlFor="" className="me-2">{Config.CryptoName}</label>
                      <label htmlFor="" className="me-2">{Config.CryptoSymbol}</label>
                      <label htmlFor="" className="me-2">{Config.BotMinBuy}</label>
                      <label htmlFor="" className="me-2">{Config.BotNextBuy}</label>
                      <label htmlFor="" className="me-2">{Config.AmountLimit}</label>
                      <label htmlFor="" className="me-2">{Config.BotActive}</label>
                  </div>
              ))
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