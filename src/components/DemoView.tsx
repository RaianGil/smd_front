import React from "react";
import { connect } from 'react-redux'
import { Link } from "react-router-dom";


const DemoView = ({dot}:any) => (
    <div className="">
        <form></form>
            <h1>DT Bot</h1>
            {
                dot.map((bot:any) =>(
                    <div className="">
                        <label htmlFor="">{bot.CryptoSymbol}</label>
                        <label htmlFor="">{bot.BotPercent}</label>
                        <label htmlFor="">{bot.BotStart}</label>
                        <label htmlFor="">{bot.BotStop}</label>
                        <label htmlFor="">{bot.BotAmout}</label>
                        <label htmlFor="">{bot.CryptoAmount}</label>
                        <label htmlFor="">{bot.BotStatus}</label>
                        <Link to="/ST/Config">Hola</Link>
                    </div>
                ))
            }
    </div>
)

const mapState = (state:any)=> ({
    dot: state.BotDT
})

const mapDispatch = (dispatch:any) => ({

})


export default connect(mapState, mapDispatch)(DemoView)