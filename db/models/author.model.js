import mongoose, { Schema, model } from "mongoose";
const authorSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  bio: {
    type: String,
  },
  birthDate: {
    type: Date,
  },
  books: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "book",
    },
  ],
});
const authormodel = model("author", authorSchema);
export default authormodel;
