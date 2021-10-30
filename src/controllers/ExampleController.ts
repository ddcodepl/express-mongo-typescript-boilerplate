import { NextFunction, Request, Response } from 'express';

const ExampleController = {
    async convert(req: Request, res: Response, next: NextFunction) {
        return res.status(200).send({ msg: 'Example msg' });
    },
};

export default ExampleController;
