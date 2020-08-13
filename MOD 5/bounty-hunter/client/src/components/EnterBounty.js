import React, { useState } from "react"


function EnterBounty(props) {

    const initData = {
        firstName: "",
        lastName: "",
        living: true,
        bountyAmount: "",
        type: "",
        _id: ""
    }

    const [bountyInfo, setBountyInfo] = useState(initData)

    function handleChange(event) {
        const { name, value } = event.target
        setBountyInfo((prevBountyInfo) => ({
            ...prevBountyInfo, [name]: value
        })

        )
    }


    function handleSubmit(event) {
        event.preventDefault()
        props.addBounty(bountyInfo)
        setBountyInfo(initData)
    }


    // console.log(bountyInfo)

    return (
        <div>
            <div>Enter New Bounty Here</div>
            <form onSubmit={handleSubmit}>
                <input name="firstName"
                    value={bountyInfo.firstName}
                    placeholder="First Name"
                    onChange={handleChange}
                    className="entry-field"
                >
                </input>
                <input name="lastName"
                    value={bountyInfo.lastName}
                    placeholder="Last Name"
                    onChange={handleChange}
                    className="entry-field"
                >
                </input>
                <input name="bountyAmount"
                    value={bountyInfo.bountyAmount}
                    placeholder="Bounty Amount"
                    type="number"
                    onChange={handleChange}
                    className="entry-field"
                >
                </input>
                <input name="type"
                    value={bountyInfo.type}
                    placeholder="Type"
                    onChange={handleChange}
                    className="entry-field"
                >
                </input>

                <div style={{ margin: "10px" }}>
                    <button>SUBMIT</button>
                </div>

            </form>
            <hr></hr>
        </div>
    )
}


export default EnterBounty