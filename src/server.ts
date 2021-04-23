import express from 'express';
const app = express()

app.get('/', (request, response) => {
    return response.json({
        message: "Hello Friend!"
    })
})

app.listen(3005, () => {
    console.log("http://localhost:3005")
})