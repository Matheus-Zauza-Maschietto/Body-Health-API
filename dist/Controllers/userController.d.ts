import { Request, Response } from 'express';
declare class UserController {
    createUser(req: Request, res: Response): Promise<Response>;
    loginUser(req: Request, res: Response): Promise<Response>;
}
declare const _default: UserController;
export default _default;
