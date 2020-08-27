import React, { useState, createContext } from "react"
const SignContext = React.createContext()

function SignContextProvider(props) {

    // only use number to display if there are limited licenses
    //     const [number, setNumber] = useState()  
    const [sign, setSign] = useState("")
    const [signData, setSignData] = useState({ description: "" })
    const [birthDate, setBirthDate] = useState()
    const [signData2, setSignData2] = useState({ ["Your Sun Sign"]: "" })
    
    
    

    return (
        <SignContext.Provider
            value={{  sign, signData, birthDate, signData2, 
            setSign, setSignData, setBirthDate, setSignData2 }}>
            {props.children}
        </SignContext.Provider>
    )

}


export { SignContextProvider, SignContext }