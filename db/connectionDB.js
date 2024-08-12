import mongoose from "mongoose"
const connectionDB = async () => {
  return await mongoose
    .connect("mongodb://127.0.0.1:27017/assignment")
    .then(() => {
      console.log("DB is connected");
    })
    .catch((err) => {
      console.log({ msg: "failed to connect to database" });
    });
};
export default connectionDB;
