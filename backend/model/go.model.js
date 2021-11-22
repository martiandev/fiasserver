import Mongoose from "mongoose";
const Schema = Mongoose.Schema;

const goSchema = new Schema(
    {
        gno:{
            type:String,
            default:""
        },
        rn:{
            type:String,
            default:""
        },
        gs:{
            type:String,
            default:""
        },
        da:{
            type:String,
            default:""
        },
        sf:{
            type:String,
            default:""
        },
        ti:{
            type:String,
            default:""
        },
        ws:{
            type:String,
            default:""
        }
    },
    {
        timestamps:true
    }
);

const GO = Mongoose.model('GO', goSchema);
export default GO;