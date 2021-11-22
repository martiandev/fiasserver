import dotenv from "dotenv";
import Mongoose from "mongoose"
dotenv.config();
class FiasDB
{
    connect()
    {
        return new Promise(
        (resolve,reject)=>
        {
            const uri = process.env.ATLAS_URI;
            Mongoose.connect(uri, { useNewUrlParser: true, dbName:process.env.DB_NAME, useUnifiedTopology:true},
                function(err){
                    if(err)
                    {
                        console.log("DB Failed:"+err.message)
                        reject(err.message);
                    }
                }
            );
            const connection = Mongoose.connection;
            console.log("Connecting to database");
            connection.once('open', () => {
                console.log("MongoDB database connection established successfully");
                resolve();
            })
        }
    );
  }
}

const fiasdb = new FiasDB();
export default fiasdb;

