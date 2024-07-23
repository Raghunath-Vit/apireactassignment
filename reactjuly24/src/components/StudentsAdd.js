import { useState } from "react";
function StudentsAdd()
{
    const [studentName,setStudentName]=useState("Raghunath");
    const [studentAge,setStudentAge]=useState(21);

    const [studentOb,setStudentOb]=useState([])


    function submitInArray()
    {
        setStudentOb([...studentOb, { studentName, studentAge }]);
        setStudentName("");
        setStudentAge("");
    }

    function deletedetails(indexToDelete)
    {
        let newDetails=studentOb.filter(function(val,index){
            if(indexToDelete===index) return false;
            return true;
        });
        setStudentOb(newDetails);
    }

    function clear()
    {
        let studetails=[];
        setStudentOb(studetails);
    }
    return(
        <>
            <div className="outer">
                <h2 className="texty">Mark Your Students Details</h2>
                <input type="text" value={studentName} onChange={(e)=>setStudentName(e.target.value)} />
                <input type="number" value={studentAge}  onChange={(e)=>setStudentAge(e.target.value)}/>
                <div className="innersi">
                <button className="bt1" onClick={submitInArray}>Submit Details</button>
                <button className="bt2" onClick={clear}>Clear All</button>
                </div>
                    {
                        studentOb && studentOb.map(function(val,index){
                            return(
                                <div key={index} className="delBt">
                                    <h3 className="whiteText">{val.studentName} {val.studentAge}</h3>
                                    <button className="bt3" onClick={function(){
                                        deletedetails(index);
                                    }}>Delete</button>
                                </div>)
                        })
                    }
                
            </div>
        </>
    )
}
export default StudentsAdd;















