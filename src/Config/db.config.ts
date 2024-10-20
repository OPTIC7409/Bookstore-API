import mongoose from 'mongoose'

const connectionString = 'mongodb://localhost:27017/bookstore'

const options = {
    autoIndex: false, 
    maxPoolSize: 10, 
    serverSelectionTimeoutMS: 5000, 
    socketTimeoutMS: 45000, 
    family: 4 
  };

export const db = mongoose.connect(connectionString, options)
.then(res => {
    if(res){
        console.log('Database connection successfully to bookstore')
    }
    
}).catch(err => {
    console.log(err)
})