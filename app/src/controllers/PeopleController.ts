import { Request, Response } from 'express';
import { createPeople } from '../services/PeopleService';
export async function create(req: Request, res: Response){
    try {
        const result = await createPeople();
        res.header("Content-Type",'application/json');
        res.send(JSON.stringify(result, null, 2));
    } catch (error) {
        res.status(422).send(error);
    }
}