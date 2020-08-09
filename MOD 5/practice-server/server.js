const express = require("express")
const app = express()

// console.log(app)






app.get("/", (req, res) => {
    res.send({
        data: "here it is",
        moreData: "here is more"
    })
})


// 2 arguments  (port, callback function)
app.listen(9000, () => {
    console.log("The server is running on port 9000")
})