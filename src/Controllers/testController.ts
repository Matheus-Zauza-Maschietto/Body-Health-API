import {Request, Response } from 'express'

class TestController{
    public async healthCheck(req: Request, res: Response): Promise<Response>{
        return res.status(200).send('Server is up and running')
    }
}

export default new TestController()