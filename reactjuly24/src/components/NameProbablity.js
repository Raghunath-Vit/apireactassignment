import React,{useState} from 'react'
import axios from 'axios';

const NameProbablity = () => {
    const [name,setName]=useState("name");
    const [genders,showGenders]=useState("");

    function handleSubmit() {
        axios.get(`https://api.genderize.io/?name=${name}`)
        .then(function(response){
            console.log(response.data.gender);
            showGenders(response.data.gender);

        }).catch(function(err)
    {
        console.log(err);
    })
    }
  return (
    <>
      <div className="outerTextBox">
        <h3 className='hthree'>Enter Your Name For gender probablity checker...</h3>
        <input className='ins' type="text" value={name} onChange={(e)=>(setName(e.target.value))} />
        <button className='bts' onClick={handleSubmit}>Know? Your Gender</button>
      </div>
      <h1 className='resulttext'>Congratulations! You being identified as {genders}</h1>
    </>
  )
}

export default NameProbablity
