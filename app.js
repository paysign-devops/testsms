const express = require('express')
const app = express()
const port = 80

app.get('/', (req, res) => res.send('If you can see this, the pipeline is working'))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
