import express from 'express';
import { routes } from './routes'

const app = express()
app.use(routes)

app.listen(3005, () => {
    console.log("http://localhost:3005")
})