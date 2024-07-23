import { useState } from "react";
function Angles()
{
    const [degree,setDegree]=useState(0);
    const [output,setOutput]=useState(0);
    function SinF()
    {
        let res=Math.degree(Math.sin(degree));
        setOutput(res);
    }
    function CosF()
    {
        let res=Math.degree(Math.cos(degree));
        setOutput(res);
    }
    function TanF()
    {
        let res=Math.degree(Math.tan(degree));
        
        setOutput(res);
    }
    return(
        <>
            <div className="outer">
                <h1 className="texty">Trigo Degree</h1>
                <input type="number" value={degree} onChange={(e)=>setDegree(e.target.value)}/>
                <div className="inners">
                <button  onClick={SinF}>Sin</button>
                <button onClick={CosF}>Cos</button>
                <button onClick={TanF}>Tan</button>
                </div>
                 <h3 className="texty">Degree : {output}</h3>
            </div>
        </>
    )
}
export default Angles;