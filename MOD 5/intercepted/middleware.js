

// app.use(express.json())




// app.use((req, res, next) => {
//     req.body = { ...req.body, add: "by server" }
//     next()
// })



module.exports = {
    doJson: (app) => { app.use(express.json()) },
    serverAdd: (app) => {
        app.use((req, res, next) => {
            req.body = { ...req.body, add: "by server" }
            next()
        })
    }
}