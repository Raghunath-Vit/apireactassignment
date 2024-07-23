import { useParams } from "react-router-dom";
function Login()
{
    const params=useParams();
    let msg="Login Now!";
    function doLogin()
    {
        alert("Wow, Now i can Login too.");
    }
    return (
        <>
        <h2>{params.title}</h2>
        <h4>TokenId is : {params.tokenId}</h4>
        <div className="Login">
            <h1>{msg}</h1>
            <input type="text" name="username" />
            <input type="password" name="password" />
            <button onClick={doLogin}>Login Now!</button>
        </div>
        </>
    );
}

export default Login;