import { generateState } from 'arctic';
import github from '../strategies/github-strategy.mjs';
import flash from 'connect-flash'
import { createUserWithOauth, getUserWithOauthId, linkUserWithOauth } from '../services/auth.services.mjs';
import { authenticateUser } from '../middlewares/github-authorization.mjs';

export const getGithubLoginPage = async (req, res) => {
    if (req.user) return res.redirect('/');

    const state = generateState();
    // generateState() generates a random string used for CSRF
    // (cross-site request forgery) protection during OAuth login.

    const url = github.createAuthorizationURL(state, ["user:email"]);
    /*
    createAuthorizationURL() generates an url
    like : https://github.com/login/oauth/authorize?client_id=XXXX&redirect_uri=YYY&state=ZZZ&scope=user:email


    state is added to the URL so GitHub can echo it back.

    ["user:email"] is the scope we're asking for permission to read the user's email address from GitHub.

    GitHub requires scope user:email to access private email addresses (many users keep their email private).

    */

    const cookieConfig = {
        httpOnly: true,
        secure: true,
        maxAge: 60000 * 60, // cookie expires in 1 hour
        sameSite: "lax"
    }

    res.cookie("github_oauth_state", state, cookieConfig)

    res.redirect(url.toString());
    // It sends the user to GitHub’s OAuth login page.

}




export const getGithubCallbackPage = async (req,res) => {

    // code :  Temporary token returned by GitHub
    const { code, state } = req.query;
    const { github_oauth_state: storedState } = req.cookies;

    function handleFailedLogin() {
        // req.flash(
            // "errors",
            // "Couldn't login with Github because of invalid attempts. Please try again."
        // )
        console.log("errors",
            "Couldn't login with Github because of invalid attempts. Please try again.")
        return res.redirect('/')

    }

    // uses the connect-flash middleware in an Express application to store a 
    // temporary flash message. These messages are typically used to display 
    // notifications, warnings, or error messages after a redirect.


    if (!code || !state || !storedState || state !== storedState) {
        return handleFailedLogin()
    }

    let token;
    try {
        token = await github.validateAuthorizationCode(code);
        // github.validateAuthorizationCode(code) : It returns an object :
        //  {
        //     accessToken: 'gho_xxx', 
        //     tokenType: 'bearer',
        //     scope: 'user:email'
        // } 

        //accessToken : this is used to validate the user and get the user details.
        console.log(token.accessToken())
        if (!token || !token.accessToken()) return handleFailedLogin();

    } catch (error) {
        console.log(error);
        return handleFailedLogin()
    }

    // get the userId and name
    const githubUserResponse = await fetch('https://api.github.com/user',
        {
            headers: {
                Authorization: `Bearer ${token.accessToken()}`
             
            }
        })

    if (!githubUserResponse.ok) { return handleFailedLogin() }
    
    const githubUser = await githubUserResponse.json()
    const { id: githubUserId, name } = githubUser;
    


    // get user's email
    const githubEmailResponse = await fetch('https://api.github.com/user/emails',{
            headers: {
                Authorization: `Bearer ${token.accessToken()}`
            }
        });

    if (!githubEmailResponse.ok) return handleFailedLogin()

    const emails = await githubEmailResponse.json();
    const email = emails.filter(e => e.primary)[0].email;

    console.log(email);
    if (!email) return handleFailedLogin();



    //Condition 1 : 
    // User already exists with github's oauth linked

    let user = await getUserWithOauthId({
        provider:"github",
        email,
    })

    // User already exists with same email but github's oauth is not linked. 
    if(user && !user.providerAccountId){
        await linkUserWithOauth({
            userId:user.id,
            provider:"github",
            providerAccountId:githubUserId,
        })
    }

    // User does not exist

    if(!user){
        user = await createUserWithOauth({
            name,
            email,
            provider:"github",
            providerAccountId:githubUserId
        })
    }

    
    await authenticateUser({req,res,user,name,email})
    res.clearCookie("github_oauth_state");

    res.redirect('/');



}