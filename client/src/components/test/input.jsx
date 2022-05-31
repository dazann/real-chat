import React, { useState } from 'react'

const Input = (prop) => {
    let [val,setVal] = useState("");
    function submit(event){
        console.log("Submit",val)
    }
    
    return (
    <form>
        <div id="input">
            <textarea type='text' className="input" placeholder='UserName' onChange={(event)=>setVal(event.target.value)}  />
            <button type='submit' onClick={submit}>Send</button>
        </div>
    </form>
    )
}

export default Input;
