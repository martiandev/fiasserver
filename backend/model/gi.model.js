import Mongoose from "mongoose";
const Schema = Mongoose.Schema;
//  process.env.ROLES.split(", ").forEach(
//                                 (element,index)=>
//                                 {
//                                     var role = new Role({
//                                             name:element,
//                                             code:index
//                                         }   
//                                     );
//                                     roles.push(role);
//                                 }         
//                             );
const giSchema = new Schema(
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
        a0:{
            type:String,
            default:""
        },
        a1:{
            type:String,
            default:""
        },
        a2:{
            type:String,
            default:""
        },
        a3:{
            type:String,
            default:""
        },
        a4:{
            type:String,
            default:""
        },
        a5:{
            type:String,
            default:""
        },
        a6:{
            type:String,
            default:""
        },
        a7:{
            type:String,
            default:""
        },
        a8:{
            type:String,
            default:""
        },
        a9:{
            type:String,
            default:""
        },
        cs:{
            type:String,
            default:""
        },
        da:{
            type:String,
            default:""
        },
        gPlus:{
            type:String,
            default:""
        },
        ga:{
            type:String,
            default:""
        },
        gd:{
            type:String,
            default:""
        },
        gf:{
            type:String,
            default:""
        },
        gg:{
            type:String,
            default:""
        },
        gl:{
            type:String,
            default:""
        },
        gn:{
            type:String,
            default:""
        },
        gt:{
            type:String,
            default:""
        },
        gv:{
            type:String,
            default:""
        },
        mr:{
            type:String,
            default:""
        },
        np:{
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
        tv:{
            type:String,
            default:""
        },
        vr:{
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

const GI = Mongoose.model('GI', giSchema);
export default GI;