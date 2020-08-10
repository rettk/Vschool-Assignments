

app.use(express.json())

app.use((req, res, next) => {
    req.body = {...req.body, add: "by server" }
    next()
})