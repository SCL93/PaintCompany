import mongoose from "mongoose";

const PaintSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    }
})
const PaintModel = mongoose.model("paint", PaintSchema);
export {PaintModel as paints};