import mongoose from "mongoose";

const conntion = async () => {
  if (mongoose.connections[0].readyState) {
    console.log("already connected");
    return true;
  }
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("DB is Connected Successfully!");
    return true;
  } catch (err) {
    console.log("Fail to connection MongoDD !", err);
    process.exit();
  }
};

export default conntion;
