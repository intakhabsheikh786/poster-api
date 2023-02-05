const express = require('express')
const app = express()
const PORT = process.env.PORT;

app.get('/test', (req, res) => {
    res.send('hello world')
})

// start server
app.listen(PORT || 3000, () =>
    console.log(`Server started on port ${PORT || 3000}`)
);