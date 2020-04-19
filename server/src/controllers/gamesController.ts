import { Request , Response, text} from 'express';
import pool from '../database';

class GamesController {
    
    public async list (req:Request,res:Response) { 
        const games = await pool.query('SELECT * FROM games');
        res.json(games);
    }

    public async getOne (req: Request, res: Response ):Promise<any>{
        const {id} = req.params;
        const games = await pool.query('SELECT * FROM games WHERE id = ?',[id]);
        if(games.length > 0){
            return res.json(games[0]);
        }
        
        res.status(404).json({text: "The game doesn't exists"});
    }

    public async create (req:Request, res: Response):Promise<void> {
        await pool.query('INSERT INTO games set ?',[req.body]);
        res.json({message: 'Juego guardado'});
    }

    public delete(req: Request,res: Response) {
        const {id} = req.params;
        pool.query('DELETE FROM games WHERE id = ?',[id]); 
        res.json({text: `Deleting game ${req.params.id}`});
    }

    public update(req: Request,res: Response) {
        const {id} = req.params;
        pool.query('UPDATE games set ? WHERE id = ?',[req.body,id]); 
        res.json({text: `Updating game ${req.params.id}`});
    }

}

export const gamesController = new GamesController();
export default gamesController;