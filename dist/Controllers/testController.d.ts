import { Request, Response } from 'express';
declare class TestController {
    healthCheck(req: Request, res: Response): Promise<Response>;
}
declare const _default: TestController;
export default _default;
