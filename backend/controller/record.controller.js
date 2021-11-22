import Record from "../model/record.model.js";
import Client from "../model/client.model.js";


class RecordController
{
    saveRecord(data)
    {
        return new Promise(
            (resolve,reject)=>
            {
                var record = new Record();
                record.record = data;
                record.save();
                resolve(record);
                
            }
        );
    }
    
    filter(data,client)
    {
        console.log("DATA:"+data);
        console.log("DATA:"+client.gc);
        var d = data.split('|');
        var result = d[0]+"|";
        var fl = [];
        if(data.startsWith("GI"))
        {
            fl =   client.gi.split("|")[2];
        }
        else if(data.startsWith("GC"))
        {
            fl =   client.gc.split("|")[2];
        }
        else if(data.startsWith("GO"))
        {
             fl =   client.go.split("|")[2];   
        }
      
        var flSplit = fl.split("");
        var fieldList = []
        var current="";
        flSplit.forEach(
            (element,index)=>{
                if((index%2)===0)
                {
                    current = element;
                }
                else
                {
                    current = current+element;
                    if(!current.match("FL"))
                    {
                        fieldList.push(current);
                        console.log("FL:"+current);
                    }
                }
            }
        );
        console.log("FList:"+fieldList);
        console.log("Resullt:"+result);
        d.forEach(
            (element,index)=>{
                    fieldList.forEach(
                        (element2,index2)=>{
                            if(element.startsWith(element2))
                            {
                                result=result+element+"|"
                                console.log("Resullt:"+result);
                            }
                        }
                    )
            }
        )
        return result;
    }

    retrieveRecords(ipAddress)
    {
        return new Promise(
            (resolve,reject)=>
            {
                console.log("IP:"+ipAddress);
                Client.findOne(
                    {ip:ipAddress},
                    (err,res)=>
                    {
                        var result = []
                        if(res)
                        {
                            Record.find(
                                {},
                                (err,recs)=>{
                                    recs.forEach(
                                        (element,index)=>{
                                            var entry = this.filter(element.record,res);
                                                    console.log("Record:"+entry);
                                            result.push(entry);
                                        }
                                    );
                                    resolve(result);
                                }
                            );
                           
                
                          

                        }
                        else
                        {
                            console.log("Error:"+err);
                            reject(err);
                        }
                    }

                )








            }
        );
    }

}
const recordController =new  RecordController();
export default recordController;