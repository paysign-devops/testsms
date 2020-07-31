const express = require('express')
const app = express()
const port = 80

app.get('/', (req, res) => res.send('This is a test! If you can read this message on Port 80, it WORKED!'))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
