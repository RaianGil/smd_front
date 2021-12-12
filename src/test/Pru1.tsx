import React from "react";
import { DTConfig } from "../models/DTConfig";

const Pru1 = ( props:any ) => (
    <div className="">
            {
                props.model.map((Config:DTConfig) => (
                    <div className="">
                        <label htmlFor="">{Config.CryptoName}</label>
                        <label htmlFor="">{Config.CryptoSymbol}</label>
                        <label htmlFor="">{Config.BotMinBuy}</label>
                        <label htmlFor="">{Config.BotNextBuy}</label>
                        <label htmlFor="">{Config.AmountLimit}</label>
                        <label htmlFor="">{Config.BotActive}</label>
                    </div>
                ))
            }
    </div>
)

export default Pru1