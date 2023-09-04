const express=require('express');
const mongoose=require('mongoose');
const URI="mongodb://127.0.0.1:27017/products-crud-new"

async function connectToDb(){
    await mongoose.connect(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
    try{
         console.log('DB Connected')

    }catch(err){
        console.log(" DataBase Error  with ",err)
    }


}
connectToDb()

module.exports.connectToDb=connectToDb



