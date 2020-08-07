import React, { useContext, useEffect } from "react"
import { SignContext } from "./signContext"
import { Link } from "react-router-dom"
import axios from "axios"

function Horoscope() {

    const { headers, sign, signData, birthDate, signData2, setSign, setSignData, setSignData2, setBirthDate } = useContext(SignContext)

    const birthChart = {
        aries: "2000-04-04",
        taurus: "2000-05-05",
        gemini: "2000-06-05",
        cancer: "2000-07-05",
        leo: "2000-08-05",
        virgo: "2000-09-05",
        libra: "2000-10-05",
        scorpio: "2000-11-05",
        sagittarius: "2000-12-05",
        capricorn: "2000-01-05",
        aquarius: "2000-02-05",
        pisces: "2000-03-05",
        Aries: "2000-04-04",
        Taurus: "2000-05-05",
        Gemini: "2000-06-05",
        Cancer: "2000-07-05",
        Leo: "2000-08-05",
        Virgo: "2000-09-05",
        Libra: "2000-10-05",
        Scorpio: "2000-11-05",
        Sagittarius: "2000-12-05",
        Capricorn: "2000-01-05",
        Aquarius: "2000-02-05",
        Pisces: "2000-03-05",
    }

    var config2 = {
        method: 'post',
        url: `https://astrology-horoscope.p.rapidapi.com/zodiac_astrology/result?mystic_dob=${birthDate}&mystic_name=bob`,
        headers: {
            'X-RapidAPI-Key': 'a2d06be477msh1655c96c95fc081p184686jsn60d8d9d43b9b'
        }
    }

    function clearSign() {
        setSign("")
    }

    setBirthDate(sign => birthChart[sign])
    console.log(sign)
    console.log(birthDate)

    function capitalize(string) {
        const nameCapitalized = string.charAt(0).toUpperCase() + string.slice(1)
        return (nameCapitalized)
    }


    return (
        <div>
            <Link onClick={clearSign} to="/">Try another sign</Link>
            <div className="center">
                <h1>{sign === "" ? "" : capitalize(sign)}</h1>
            </div>
            <div className="center">
                <img src={signData2["Your Sun Sign"]["Image"]}></img>
            </div>
            <div className="center">
                <text>{signData.current_date}</text>
            </div>
            <div className="space"></div>
            <div>{signData.description}</div>
            <h2>Lucky color: {signData.color}</h2>
            <span style={{ backgroundColor: signData.color }}></span>
            <h2>Birthstone: {signData2["Lucky Charm"]["Birth Stone"]}</h2>
            <h2>Traits:</h2> <text>{signData2["Traits"]["General Traits"]}</text>

        </div >
    )

}



export default Horoscope