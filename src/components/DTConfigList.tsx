import React from "react";
import { DTConfig } from "../models/DTConfig";
import { connect } from 'react-redux'
import Set from "../controllers/APIData";

const DTConfigList = ({ConfigList}:any) =>{
    Set()
    if (ConfigList.length === 0) return <div>there are no videos yet</div>;
    return(
        <div className="">
            {
                ConfigList.map((Config:any) => (
                    <div className="" key={Config._id}>
                        <label htmlFor="" className="me-2">{Config.CryptoName}</label>
                        <label htmlFor="" className="me-2">{Config.CryptoSymbol}</label>
                    </div>
                ))
            }
        </div>
)}


const mapState = (state:any)=> ({
    ConfigList: state.ConfigDT
})

const mapDispatch = (dispatch:any) => ({

})


export default connect(mapState, mapDispatch)(DTConfigList)