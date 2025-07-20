import { GitHub } from 'arctic';
import  {config} from 'dotenv';
config();

//Creates a new GitHub OAuth client.
const github =  new GitHub(
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET,
    `${process.env.FRONTEND_URL}/github/callback`
)

export default github;

/*
Here,
CLIENT_ID and CLIENT_SECRET: Provided by GitHub when you create a GitHub OAuth App.
*/