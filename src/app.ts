import express from 'express'
import { routes } from './routes'
import { AppDataSource } from './data-source'

class App {
    public express: express.Application

    public constructor() {
        this.express = express()
        this.middleware()
        this.routes()
        this.database()
    }

    private database(): void {
        AppDataSource.initialize()
        .then(() => console.log('Database connected'))
        .catch(err => console.error('Database connection error: ', err))
    }
    
    private middleware(): void {
        this.express.use(express.json())
    }

    private routes(): void {
        this.express.use(routes)
    }
}

export default new App().express