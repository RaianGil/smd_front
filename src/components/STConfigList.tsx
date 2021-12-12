import React from "react";
import { STConfig } from "../models/STConfig";

const STConfigList = (props:any) =>(
    <div className="">
        {
            props.STConfig.map((Config:STConfig) => (
                <div className="">
                    <label htmlFor="" className="me-2">{Config.CryptoName}</label>
                    <label htmlFor="" className="me-2">{Config.CryptoSymbol}</label>
                    <label htmlFor="" className="me-2">{Config.BotBuy}</label>
                    <label htmlFor="" className="me-2">{Config.BotLimitBuy}</label>
                    <label htmlFor="" className="me-2">{Config.BotSell}</label>
                    <label htmlFor="" className="me-2">{Config.BotAmount}</label>
                    <label htmlFor="" className="me-2">{Config.BotAmountLimit}</label>
                    <label htmlFor="" className="me-2">{Config.IsRealAccount}</label>
                    <label htmlFor="" className="me-2">{Config.BotActive}</label>
                    <label htmlFor="" className="me-2">{Config.InOrder}</label>
                </div>
            ))
        }
    </div>
) 

export default STConfigList