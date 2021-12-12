import React from "react"
import { useDispatch } from "react-redux"
import { getDTConfig } from "./DTConfigService"

const Set = async () => {
    let dispatch = useDispatch()
    let data = await getDTConfig()
    dispatch({
        type: "HOLA_MUNDO",
        data
    })
}

export default Set