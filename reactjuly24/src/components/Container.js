// import Login from "../components/Login.js"
function Container({children})
{
    return (
        <div className="Container">
            <h1>I am a Container</h1>
            {children}
            {/* <Login/> */}
        </div>
    )
}
export default Container;