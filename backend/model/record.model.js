import Mongoose from "mongoose";
const Schema = Mongoose.Schema;

const recordSchema = new Schema(
    {
        record:{
            type:String,
            default:""
        }
    },
    {
        timestamps:true
    }
);

const Record = Mongoose.model('Record', recordSchema);
export default Record;