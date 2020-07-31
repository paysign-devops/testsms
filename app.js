const express = require('express')
const app = express()
const port = 80

app.get('/', (req, res) => res.send('All works well. This is the Hello, World app!'))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
