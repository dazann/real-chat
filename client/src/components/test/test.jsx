import React from 'react';
import './test.css';
import Infobar from './infobar.jsx';
import Input from './input.jsx';
import Messages from './messages.jsx';
import Users from './users';

function Test({location})
{
    let message_list = [{msg:'Message1Message1',flag:false},{msg:'Message2 Message2 Message 2Message2 Message 2Message2 Message2Me ssage2Me ssa ge2Message2 Message2Messag e2Message2Me ssage2Messag e2Message 2Message2M essage2Message2',flag:false},{msg:'Message2',flag:true},{msg:'Message2',flag:false},{msg:'Message2',flag:true},{msg:'Message2',flag:false},{msg:'Message2',flag:true},{msg:'Message2',flag:true},{msg:'Message2',flag:false},{msg:'Message2',flag:true},{msg:'Message2',flag:false},{msg:'Message2Message2Message2Message2Message2Message2Message2Message2Message2Message2Message2Message2Message2Message2Message2Message2Message2Message2Message2Message2Message2Message2Message2Message2Message2Message2',flag:true},{msg:'Message2',flag:false}];
    let users = ['User1','User2','User3'];
    let room = 'Room'
    return (
        <div className="box">
            <div id="chatbox">
                <Infobar room={room}/>
                <Messages message_list={[...message_list]}/>
                {/* <Messages/> */}
                <Input/>
            </div>
            <div id="infosection">
                <h2>    Active Users in the Room:</h2>
                <Users users={users}/>
            </div>
        </div>
    )
}
export default Test;