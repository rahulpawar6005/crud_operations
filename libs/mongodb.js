import mongoose from "mongoose";

const connectMongoDB = async () => {
  const username = "prishendre91";
  const password = "prishendre91";
  try {
    // mongodb+srv://prishendre91:<password>@cluster0.3ducylk.mongodb.net/?retryWrites=true&w=majority
    const {connection} = await mongoose.connect(`mongodb+srv://cluster0.3ducylk.mongodb.net/`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName: "crud",
      user: username,
      pass: password,
    });
// console.log(connection)
    console.log("Connected to MongoDB.");
  } catch (error) {
    console.log(error);
  }
};
export default connectMongoDB;

