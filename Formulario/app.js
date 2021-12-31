const port = 3003
const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.post('/usuarios', (req,res,next) => {
    console.log(req.body)
})

app.listen(port, (req, res, next) => {
    console.log(`Server is listening to port ${port}`)
})