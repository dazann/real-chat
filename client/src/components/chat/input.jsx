import React from 'react'

const Input = (prop) => {
    return (
    <form>
        <div id="input">
            <textarea type='text' className="input" placeholder='Message' onChange={(event)=>prop.setMessage(event.target.value)} onKeyPress={(event)=>{
                        if(event.key==='Enter')
                        {
                            prop.sendMessage(event);
                            let tarea=document.getElementsByTagName('textarea');
                            tarea[0].value="";
                        }
                }    
            }  />
            <button type='submit' onClick={(event)=>{prop.sendMessage(event);let tarea=document.getElementsByTagName('textarea');
                            tarea[0].value="";}}>Send</button>
        </div>
    </form>
    )
}

export default Input;
