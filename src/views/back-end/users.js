const express = require('express');

const app = express()
app.use(express.urlencoded({extended: false}))
app.use(express.json());
const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('http://localhost:3000/todo');

mongoose.connect('mongodb://localhost:27017/users',
{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log('connected')
},err=>{
    console.log('not connected'+err)
})

const isi = new mongoose.Schema({
    name:String,
    password:String,
})
module.exports=mongoose.model('test',isi);
