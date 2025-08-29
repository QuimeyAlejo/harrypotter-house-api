import express from 'express';
import { PORT } from './config.js';
import characterRoutes from './routes/characters.routes.js'
import { sequelize } from './db.js';
import cors from 'cors'

import './models/Characters.js'

const app = express()
app.use(cors())
app.use(express.json());
app.use(characterRoutes)

const startServer = async () => {

    try {
        await sequelize.sync();
        console.log("DB connect ✅✅✅")
        app.listen(PORT)
    console.log(`http://localhost:${PORT}`)
    } catch (error) {
        console.error("Upss there was an error on initialization",error)
    }
}
startServer()
