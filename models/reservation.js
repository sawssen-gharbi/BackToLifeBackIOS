import mongoose from 'mongoose';
const { Schema, model } = mongoose;
const ReservationSchema = new Schema({
    doctor: 
    { type: Schema.Types.ObjectId, ref: 'user' },
    patient: 
    { type: Schema.Types.ObjectId, ref: 'user' },
   

    therapy: 
    { type: Schema.Types.ObjectId, ref: 'therapy' },
        
   
    status:{
        type:String,
        default:"En attente"
    },
    date:{
        type:Date,
        default:Date.now()
    
        
    },


      
       
        
    },
    {
        timestamp:true
    }
);

export default mongoose.model('reservation',ReservationSchema);