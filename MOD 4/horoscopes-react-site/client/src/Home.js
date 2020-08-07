import React, { useState, useEffect, useContext } from "react"
import { Link } from "react-router-dom"
import axios from "axios"
import { SignContext } from "./signContext"


function Home() {

    const { headers, sign, signData, birthDate, signData2, setSign, setSignData, setSignData2, setBirthDate } = useContext(SignContext)


    useEffect(() => {

        // if (sign) {
        axios.post(`https://aztro.sameerkumar.website?sign=${sign}&day=today`)
            // .then(response => console.log(response))
            // .then(response => dataToState(response.data))
            // .then(response => response.json())
            .then(response => {
                const stuff = response.data
                setSignData(stuff)
            })
        // }
    }, [sign]
    )



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

    function signChoice(event) {
        const value = event.target.value
        setSign(value)
        setBirthDate(birthChart[event.target.value])


        console.log(sign)
        console.log(birthDate)

    }

    useEffect(() => {
        console.log(birthDate)
        if (!birthDate) {
            return
        } else {

            axios(config2)
                .then(response => {
                    const stuff2 = response.data.data
                    setSignData2(stuff2)
                })

                .catch(error => {
                    console.log(error)
                })
            console.log(birthDate)
        }
    }, [birthDate]
    )




    function handleChange(event) {
        const date = event.target.value
        setBirthDate(date)
    }




    var config2 = {
        method: 'post',
        url: `https://astrology-horoscope.p.rapidapi.com/zodiac_astrology/result?mystic_dob=${birthDate}&mystic_name=bob`,
        headers: {
            'X-RapidAPI-Key': 'a2d06be477msh1655c96c95fc081p184686jsn60d8d9d43b9b'
        }
    }




    function handleSubmit(event) {
        event.preventDefault()
        axios(config2)
            .then(function (response) {
                const stuff2 = response.data.data
                console.log(stuff2)
                setSignData2(stuff2)
                setSign(stuff2["Your Sun Sign"]["Sun Sign"])

            })
            .catch(function (error) {
                console.log(error);
            });

    }


    // function handleSubmit(event) {
    //     event.preventDefault()
    //     axios.post(`https://astrology-horoscope.p.rapidapi.com/zodiac_finder/result?mystic_dob=${birthDate}`, { header: headers })
    //         .then(response => {
    //             console.log(response.data)
    //         })
    // }

    function capitalize(string) {
        const nameCapitalized = string.charAt(0).toUpperCase() + string.slice(1)
        return (nameCapitalized)
    }

    function lowerize(string) {
        const nameLowerized = string.charAt(0).toLowerCase() + string.slice(1)
        return (nameLowerized)
    }

    // console.log(birthDate)
    // console.log(signData)
    // console.log(signData2.data["Your Sun Sign"]["Sun Sign"])

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
                <form name="form" onSubmit={handleSubmit}>
                    <div className="space"></div>
                    <h3 style={{ display: sign === "" ? "inline" : "none" }}>
                        Don't know your horoscope? Enter your date of birth here:
                    </h3>
                    <input onChange={handleChange} style={{ display: sign === "" ? "inline" : "none" }} type="date">
                    </input>
                    {" "}
                    <button style={{ display: sign === "" ? "inline" : "none" }}>Submit</button>
                </form>
            </div>
            <div className="main">
                <h2>
                    {sign === "" ? "" : capitalize(sign)}
                </h2>
            </div>
            <div className="space"></div>
            <div className="main">
                <text>{signData.current_date}</text>
            </div>
            <div className="space"></div>
            <div>
                <text>{signData.description}</text>
            </div>
            <div className="main">
                <Link to="/horoscope-info" className="vertical-space" style={{ display: sign === "" ? "none" : "inline" }}>
                    Find out more about {sign === "" ? "" : capitalize(sign)}!
                </Link>
            </div>
        </div>
    )

}



export default Home