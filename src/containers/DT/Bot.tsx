import React from "react";
import { connect } from 'react-redux'
import APIData from "../../components/APIData";

const Bot = () => (
    <div className="">
        <APIData.DTBotAPI />
    </div>
)

const mapState = (state:any)=> ({
    BotList: state.BotDT
})

const mapDispatch = (dispatch:any) => ({

})


export default connect(mapState, mapDispatch)(Bot)