import mongoose from 'mongoose';

async function connect() {
  try {
    await mongoose.connect("mongodb+srv://navin11104:Na1424vin*@cluster0.zreerhs.mongodb.net/studentdetails");
    console.log("Connected to MongoDB successfully");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}

export default connect;