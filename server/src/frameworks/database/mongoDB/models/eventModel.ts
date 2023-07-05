import mongoose,{Schema,model} from "mongoose";

const eventSchema = new Schema(
    {
        eventName:{
            type:String,
            required:[true,'please add a category name'],
            unique: true
        },
        organizer:{
            type:String,
            required:[true,'please add a category name']
        },
        category:{
            type:String,
            required:[true,'please add description']
        },
        addressLine1:{
            type:String,
            required:[true,'please add description']
        },
        addressLine2:{
            type:String,
        },
        addressLine3:{
            type:String,
        },
        startDate:{
            type:String,
            required:[true,'please add description']
        },
        startTime:{
            type:String,
            required:[true,'please add description']
        },
        endDate:{
            type:String,
            required:[true,'please add description']
        },
        endTime:{
            type:String,
            required:[true,'please add description']
        },
        imageURL:{
            type:Array<string>,
        },
        videoURL:{
            type:String,
        },
        description:{
            type:String,
        },
        eventCapacity:{
            type:Number,
        },
        ticketPrice:{
            type:Number,
        },
        ticketValue:{
            type:String
        },
        status:{
            type:String
        },
        registeredTime:{
            type:String
        },
        orgOwnerId:{
            type:String
        }
    }
)

const Event  = model('Event',eventSchema,'events')
export default Event