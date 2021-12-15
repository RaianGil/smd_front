import React from "react";
import { DTConfig } from "../models/DTConfig";
import { connect } from 'react-redux'

const DTConfigList = ({ConfigList}:any) => {

  if(ConfigList == null)
    return <div className=""> nothing </div>
  else 
    return (
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
    )
}


const mapState = (state:any) => ({
  ConfigList: state.DTConfig
})

const mapDispatch = (dispatch:any) => ({

})


export default connect(mapState, mapDispatch)(DTConfigList)