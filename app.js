const express = require('express')
const app = express()
const port = 80

app.get('/', (req, res) => res.send('Hello, From Inside Of The World'))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
