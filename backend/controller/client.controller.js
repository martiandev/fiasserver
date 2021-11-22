import Client from "../model/client.model.js";

class ClientController
{
    
    getClient(ipAddress)
    {
        return new Promise(
            (resolve,reject)=>{
                 Client.findOne(
                    {ip:ipAddress},
                    (err,res)=>
                    {
                        if(err)
                        {
                            reject("Error in checking client");
                        }
                        else
                        {
                            if(res)
                            {
                              resolve(res);
                            }
                            else{
                                reject("Unregistered");
                            }
                        }
                    }
                );
            }
        );
        
       
    }
    saveLinkDescription(ipAddress,ld)
    {
        return new Promise(
            (resolve,reject)=>
            {
                console.log("Saving link description for:"+ipAddress);
                console.log("Saving link description:"+ld);
                Client.findOne(
                    {ip:ipAddress},
                    (err,res)=>
                    {
                        if(err)
                        {
                            reject("Error in checking client")
                        }
                        else
                        {
                             if(res)
                            {
                                res.ld = ld;
                                res.save();
                                resolve(res)
                            }
                            else{
                                console.log("Unregistered:"+ipAddress);
                                var c = new Client({ip:ipAddress});
                                c.save();
                                reject("Unregistered")
                            }
                        }
                    }
                );
                
            }
        );
    }

    saveCheckInLR(ipAddress,gi)
    {
        return new Promise(
            (resolve,reject)=>
            {

                Client.findOne(
                    {ip:ipAddress},
                    (err,res)=>
                    {
                        if(err)
                        {
                            reject("Error in checking client")
                        }
                        else
                        {
                             if(res)
                            {
                                res.gi = gi;
                                res.save();
                                resolve(res)
                            }
                            else{
                                console.log("Unregistered:"+ipAddress);
                                var c = new Client({ip:ipAddress});
                                c.save();
                                reject("Unregistered")
                            }
                        }
                    }
                );
                
            }
        );
    }

    saveCheckOutLR(ipAddress,go)
    {
        return new Promise(
            (resolve,reject)=>
            {

                Client.findOne(
                    {ip:ipAddress},
                    (err,res)=>
                    {
                        if(err)
                        {
                            reject("Error in checking client")
                        }
                        else
                        {
                             if(res)
                            {
                                res.go = go;
                                res.save();
                                resolve(res)
                            }
                            else{
                                console.log("Unregistered:"+ipAddress);
                                var c = new Client({ip:ipAddress});
                                c.save();
                                reject("Unregistered")
                            }
                        }
                    }
                );
                
            }
        );
    }
    saveChangeGuestLR(ipAddress,gc)
    {
        return new Promise(
            (resolve,reject)=>
            {

                Client.findOne(
                    {ip:ipAddress},
                    (err,res)=>
                    {
                        if(err)
                        {
                            reject("Error in checking client")
                        }
                        else
                        {
                             if(res)
                            {
                                res.gc = gc;
                                res.save();
                                resolve(res)
                            }
                            else{
                                console.log("Unregistered:"+ipAddress);
                                var c = new Client({ip:ipAddress});
                                c.save();
                                reject("Unregistered")
                            }
                        }
                    }
                );
                
            }
        );
    }
    onNewConnection(ipAddress)
    {
        return new Promise(
            (resolve,reject)=>
            {
                console.log("Checking database for client:"+ipAddress);
                Client.findOne(
                    {ip:ipAddress},
                    (err,res)=>
                    {
                        if(err)
                        {
                            reject("Error in checking client")
                        }
                        else
                        {
                             if(res)
                            {
                                console.log("Welcome Back:"+ipAddress);
                                resolve(true)
                            }
                            else{
                                console.log("Welcome to FIAS!!:"+ipAddress);
                                var c = new Client({ip:ipAddress});
                                c.save();
                                resolve(false)
                            }
                        }
                    }
                );
                
            }
        );
    }

}
const clientController =new  ClientController();
export default clientController;