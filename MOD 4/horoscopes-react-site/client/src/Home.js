import React, { useState, useEffect } from "react"
// import { Link, Route, Switch } from "react-router-dom"
import axios from "axios"

function Home() {
    // only use number to display if there are limited licenses
    //     const [number, setNumber] = useState()  
    const [sign, setSign] = useState()
    const [signData, setSignData] = useState({ description: "" })
    const [birthDate, setBirthDate] = useState()
    // console.log(number)


    useEffect(() => {
        axios.post(`https://aztro.sameerkumar.website?sign=${sign}&day=today`)
            // .then(response => console.log(response))
            // .then(response => dataToState(response.data))
            // .then(response => response.json())
            .then(response => {
                const stuff = response.data
                setSignData(stuff)
            })
    }, [sign]
    )

    // function dataToState(serverData) {
    //     const data = serverData
    //     console.log(data)
    // }


    function signChoice(event) {
        const value = event.target.value
        setSign(value)
        // console.log(sign)
    }

    console.log(sign)
    console.log(signData)

    return (
        <div>
            <div className="main">
                <h1>Your Daily Horoscope!</h1>
            </div>
            <div className="main">
                <h2>Select your horoscope</h2>
            </div>

            <div className="signs">
                <button onClick={signChoice} name="aquarius" value="aquarius">Aquarius</button>
                <button onClick={signChoice} name="pisces" value="pisces">Pisces</button>
                <button onClick={signChoice} name="aries" value="aries">Aries</button>
                <button onClick={signChoice} name="taurus" value="taurus">Taurus</button>
                <button onClick={signChoice} name="gemini" value="gemini">Gemini</button>
                <button onClick={signChoice} name="cancer" value="cancer">Cancer</button>
                <button onClick={signChoice} name="leo" value="leo">Leo</button>
                <button onClick={signChoice} name="virgo" value="virgo">Virgo</button>
                <button onClick={signChoice} name="libra" value="libra">Libra</button>
                <button onClick={signChoice} name="scorpio" value="scorpio">Scorpio</button>
                <button onClick={signChoice} name="sagittarius" value="sagittarius">Sagittarius</button>
                <button onClick={signChoice} name="capricorn" value="capricorn">Capricorn</button>
            </div>
            <div className="main">
                <h3 style={{ display: sign === undefined ? "inline" : "none" }}>
                    Don't know your horoscope? Enter your date of birth here:
                    </h3><input style={{ display: sign === undefined ? "inline" : "none" }} type="date"></input>
            </div>
            <div className="main">
                <h2 style={{ display: sign === undefined ? "none" : "inline" }}>
                    {sign}
                </h2>
            </div>
            <div className="space"></div>
            <div>
                <text>{signData.description}</text>
            </div>
            <div className="main">
                {/* <Link to="/horoscope-info" className="vertical-space" style={{ display: sign === undefined ? "none" : "inline" }}>
                    Find out more about your sign!
                    </Link> */}
            </div>
        </div>
    )

}



export default Home