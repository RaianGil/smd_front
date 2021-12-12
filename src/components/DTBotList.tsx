import React from "react";
import { DTBot } from "../models/DTBot";

const DTBotList = (props:any) => (
    <div className="">
        {
            props.DTBot.map((Bot:DTBot) =>(
                <div className="">
                    <label htmlFor="" className="me-2">{Bot.CryptoSymbol}</label>
                    <label htmlFor="" className="me-2">{Bot.BotPercent}</label>
                    <label htmlFor="" className="me-2">{Bot.BotStart}</label>
                    <label htmlFor="" className="me-2">{Bot.BotStop}</label>
                    <label htmlFor="" className="me-2">{Bot.BotAmount}</label>
                    <label htmlFor="" className="me-2">{Bot.CryptoAmount}</label>
                    <label htmlFor="" className="me-2">{Bot.BotStatus}</label>
                </div>
            ))
        }
    </div>
)

export default DTBotList