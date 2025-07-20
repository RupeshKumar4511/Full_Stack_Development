import express from 'express';
const router = express.Router();
import {getGithubLoginPage,getGithubCallbackPage} from '../controllers/authControllers.mjs';


router.get('/github',getGithubLoginPage)
router.get('/github/callback',getGithubCallbackPage)

export default router