import Mongoose from "mongoose";
const Schema = Mongoose.Schema;

const clientSchema = new Schema(
    {
        ip:{
           type:String,
           required:true 
        },
        ld:{
            type:String,
            default:""
        },
        gi:{
            type:String,
            default:""
        },
        go:{
            type:String,
            default:""
        },
        gc:{
            type:String,
            default:""
        }
    },
    {
        timestamps:true
    }
);

const Client = Mongoose.model('Client', clientSchema);
export default Client;