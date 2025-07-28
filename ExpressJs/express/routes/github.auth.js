import express from 'express';
const router = express.Router();
import {getGithubLoginPage,getGithubCallbackPage} from '../controllers/authControllers.mjs';
import { ensureAuthenticated } from '../middlewares/auth.mjs';


router.get('/github',getGithubLoginPage)
router.get('/github/callback',getGithubCallbackPage);
router.get('/test',ensureAuthenticated,(req,res)=>{
    res.status(200).send({message:"success"})
})

export default router