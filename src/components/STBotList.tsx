import React from "react";
import { STBot } from "../models/STBot";

const STBotList = (props:any) =>(
    <div className="">
        {
            props.STBot.map((Config:STBot) => (
                <div className="">
                    <label htmlFor="" className="me-2">{Config.CryptoSymbol}</label>
                    <label htmlFor="" className="me-2">{Config.BotStart}</label>
                    <label htmlFor="" className="me-2">{Config.BotStop}</label>
                    <label htmlFor="" className="me-2">{Config.BotAmount}</label>
                    <label htmlFor="" className="me-2">{Config.BotAmount}</label>
                    <label htmlFor="" className="me-2">{Config.CryptoAmount}</label>
                    <label htmlFor="" className="me-2">{Config.BotStatus}</label>
                </div>
            ))
        }
    </div>
) 

export default STBotList