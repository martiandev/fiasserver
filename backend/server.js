
import dateformat from 'dateformat';
import express from 'express';
import cors from 'cors';
import Net from 'net';
import dotenv from 'dotenv';
import fiasdb from '../backend/model/database/fiasdb.js';
import clientController from '../backend/controller/client.controller.js';
import recordController from '../backend/controller/record.controller.js';

var sockets = [];

const server = new Net.Server();
dotenv.config();
const app       = express();
const port      = process.env.PORT || 9123;
const tcpPort   = process.env.PORT || 9124;
const delay = ms => new Promise(resolve => setTimeout(resolve, ms))
app.use(cors());
app.use(express.json());
app.listen(port, () => {
    console.log(`API server started: ${port}`);
});

server.listen(
    tcpPort,
    function(){

     
        // giController.parse("GI|RN2781|G#12345|GNGuest, Mr.|GLEA|GV3|GGA123|GSN|");
         console.log(`TCP server started: ${tcpPort}`);
         console.log(`Connecting to database:`);
         fiasdb.connect()
         .then(
             ()=>
             {
                console.log(`Connected to database`);
             }
         )
         .catch(
             err=>{
                console.log("Default database set-up failed:"+err);
             }
         )
         
    }
);

server.on(
    'connection',
    function(socket)
    {
        if(sockets.filter(element=>element.remoteAddress===socket.remoteAddress).length==0)
        {
            sockets.push(socket);
        }
        console.log('A new connection has been established.:'+socket.remoteAddress);
        clientController.onNewConnection(socket.remoteAddress).then(
            (value)=>
            {
                if(value)
                {
                    console.log(socket.remoteAddress+"  already registered");
                }
                else
                {
                    console.log(socket.remoteAddress+" new user");
                }
            },
            (err)=>
            {

            }
        );
        var d = new Date(); 
        var date = dateformat(d,'yymmdd');
        var time = dateformat(d,'hhMMss');
        socket.write(`LS|DA${date}|TI${time}|`);
        socket.on('data',function(chunk){
            onMessage(socket,chunk.toString())
        });
        socket.on('end',function(){
            console.log('Connection closed');
        });
        socket.on('error',function(err){
            console.log(`Error:${err}`);
            
        });
    }
);

function onMessage(socket,message)
{
    
    var d = new Date(); 
    var date = dateformat(d,'yymmdd');
    var time = dateformat(d,'hhMMss');
    console.log(`Received Message:${message}`);
    if(message.startsWith("LS"))
    {
        socket.write(`LA|DA${date}|TI${time}|`)
    }
    else if (message.startsWith("LA"))
    {
        socket.write(`LA|DA${date}|TI${time}|`)
    }
    else if (message.startsWith("LE"))
    {
    }
    else if (message.startsWith("LD"))
    {
        clientController.saveLinkDescription(socket.remoteAddress,message);
    }
    else if (message.startsWith("LR")){
        if(message.startsWith("LR|RIGI"))
        {
            clientController.saveCheckInLR(socket.remoteAddress,message);

        }
        else if(message.startsWith("LR|RIGO"))
        {
             clientController.saveCheckOutLR(socket.remoteAddress,message);
        }
        else if(message.startsWith("LR|RIGC"))
        {
             clientController.saveChangeGuestLR(socket.remoteAddress,message);
        }
    }
    else if (message.startsWith("DR"))
    {
        socket.write(`DS|DA${date}|TI${time}|`);
         recordController.retrieveRecords(socket.remoteAddress).then(
             (records)=>
             {
                
                databaseResyncEnd(socket,records);
             },
             error=>{
                //   console.log("RECORD:"+error.message);
                  databaseResyncEnd(socket,null);
             }
         );

 
     
    }
    else{
        process.env.RECORDS.split(", ").forEach(
                                (element,index)=>
                                {
                                    if(message.startsWith(element))
                                    {
                                        recordController.saveRecord(message);
                                    }
                                }         
                            );
    }

}

const databaseResyncEnd = async(socket,records)=>{
    try{
    
        records.forEach(
            (element,index)=>{
                delay(100)

                socket.write(element+"SF|"); 
            }
        );

        await delay(100);
        var d = new Date(); 
        var date = dateformat(d,'yymmdd');
        var time = dateformat(d,'hhMMss');
        socket.write(`DE|DA${date}|TI${time}|`);   
    }
    catch(error){

    }
      

}