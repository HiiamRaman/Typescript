import mongoose from 'mongoose'

export const connectDB  =  async ()=>{
    try {
       const connection = await  mongoose.connect(`mongodb+srv://employee:baby@cluster0.hjrnnvx.mongodb.net/?appName=Cluster0`)
         console.log("Database connected !!!")
    } catch (error) {
        console.log("MongoDb connection failed");
        process.exit(1)

        
    }
}