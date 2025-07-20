import { generateState } from 'arctic';
import github from '../strategies/github-strategy.mjs';
import 'connect-flash'

export const getGithubLoginPage = async (req, res) => {
    if (req.user) return res.redirect('/');

    const state = generateState();
    //state is a randomly generated string (e.g., a8c9d3f...) used to prevent CSRF (cross-site request forgery).


    const url = github.createAuthorizationURL(state, ["user:email"]);
    /*

    state is added to the URL so GitHub can echo it back.

    ["user:email"] is the scope: we're asking for permission to read the user's email address from GitHub.

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




export const getGithubCallbackPage = async () => {

    // code :  Temporary token returned by GitHub
    const { code, state } = req.query;
    const { github_oauth_state: storedState } = req.cookies;

    function handleFailedLogin() {
        req.flash(
            "errors",
            "Couldn't login with Github because of invalid attempts. Please try again."
        )
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

        //accessToken : this is used to validate the user and get the user details

    } catch (error) {
        console.log(error)
    }

    //
    // get the userid and name
    const githubUserResponse = await fetch('https://github.com/user',
        {
            headers: {
                Authorization: `Bearer ${token.accessToken()}`
             
            }
        })

    if (!githubUserResponse.ok) { return handleFailedLogin() }

    const { id: githubUserId, name } = await githubUserResponse.json();


    // get user email
    const githubEmailResponse = await fetch('https://github.com/user/emails')

    if (!githubEmailResponse.ok) return handleFailedLogin()

    const emails = await githubEmailResponse.json();
    const email = emails.filter(e => e.primary)[0].email;

    if (!email) return handleFailedLogin();



    //Condition 1 : 
    // User already exists with github's oauth linked




}