import React from 'react'
import Message from './message'

const Messages = (prop) => {
    // console.log(prop.message_list)
    // .map((val,idx)=>(console.log(val,idx)))
    return (
        <div id="messages">
            {prop.message_list.map((val,idx)=>(<Message key = {idx} message={val.msg} flag = {val.flag} sender={"sender"}/>))}
        </div>
    )
}


export default Messages;