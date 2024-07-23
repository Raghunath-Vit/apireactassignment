import {useState} from 'react';
function Counter()
{
    const [stateCount,setStateCount]=useState(0);
    function increase()
    {
        setStateCount((stateCount)=>stateCount+1);
    }
    function decrease()
    {
        setStateCount((stateCount)=>stateCount-1);
    }
    function reset()
    {
        setStateCount((stateCount)=>stateCount-stateCount);
    }
    return (
        <div>
            <h1>{stateCount}</h1>
            <button onClick={increase}>Increase</button>
            <button onClick={decrease}>Decrease</button>
            <button onClick={reset}>reset count</button>
        </div>
    )
}

export default Counter;