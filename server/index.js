const express = require('express');
const socketio = require('socket.io');
const http = require('http');
const cors = require('cors');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

const router = require('./router.js');

const {addUser, removeUser, getUser, getUserInRoom} = require('./users.js')



app.use(router);
app.use(cors());




// io.on runs when we have a client connection on the server(to be spefic io instance)
io.on('connection',(socket)=>{


    try{
        socket.on('join',({name,room},callback)=>{
            const {error,user} = addUser({id: socket.id,name,room});
            if(error)
                callback();

            socket.emit('message',{user:'admin', text:`${user.name}, welcome to the room ${user.room}`});
            socket.broadcast.to(user.room).emit('message',{user:'admin',text:`${user.name}, has joined the room`});
            const users = getUserInRoom(room);
            
            setTimeout(()=>{
                io.to(user.room).emit('roomData', { room: user.room, users });
            },100)
            socket.join(user.room);
        })
    }
    catch(err)
    {
        alert("Error: ",err.message);
    }
    
    try{
        socket.on('sendMessage',(message,callback)=>{
            const user = getUser(socket.id);
            io.to(user.room).emit('message',{ user: user.name, text: message});
            callback(); 
            
        })
    }    
    catch(err)
    {
        alert("Transfer Error: ",err.message);
    }

    try{
    //ends the socket connection
        socket.on('disconnect',()=>{
            const user = getUser(socket.id);
            if(user)
            {
                io.to(user.room).emit('message',{user:'admin', text:`${user.name}, left the room ${user.room}`});
                removeUser(socket.id);
                io.to(user.room).emit('roomData', { room: user.room, users: getUserInRoom(user.room) });
            }
        });
    }    
    catch(err)
    {
        console.log('DIS')
        alert("Disconnect Error: ",err.message);
    }

});






const PORT = process.env.PORT||5000;
server.listen(PORT, function(){
    console.log(`Server Started at Port: ${PORT}`);
})