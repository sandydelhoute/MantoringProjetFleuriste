import React from "react"
import Test from "./Test.js"

const Biographie = (props) =>{
    return(
        <>
        <input type='text'  defaultValue={props.name} onChange={props.save}/>

        <Test {...props} firstname="toto"/>
        </>
    )
}

export default Biographie;