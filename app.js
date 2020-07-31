const express = require('express')
const app = express()
const port = 80

app.get('/', (req, res) => res.send('Lets see if this works after removing the Secrets from Github'))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
