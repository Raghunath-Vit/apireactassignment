import { useState } from "react";
function Addition()
{
    let [total,setTotal]=useState(0);
    let [value1,setValue1]=useState(0);
    let [value2,setvalue2]=useState(0);
    function addNum()
    {
        let sum=Number(value1)+Number(value2);
        setTotal(sum);
    }
    return(
        <>
            <div className="outer">
                <h1 className="texty">Add Calc...</h1>
                <input className="fir" type="number" value={value1} onChange={(e)=>setValue1(e.target.value)}/>
                <input className="sec" type="number" value={value2} onChange={(e)=>setvalue2(e.target.value)}/>
                <button className="addi" onClick={addNum}>Add</button>
                <h3 className="texty">Addition Value : {total}</h3>
            </div>
        </>
    )
}
export default Addition;