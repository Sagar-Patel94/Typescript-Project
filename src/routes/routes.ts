import express, {Request, Response} from "express";
import { homeDetail } from "../controllers/usersController";
const router = express.Router();

router.get('/home', homeDetail)

router.get('/about', (req: Request, res: Response) => {
    res.json({
        message: "About Page"
    })
})

export {
    router
}