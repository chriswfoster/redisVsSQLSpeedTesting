const express = require('express');
const cors = require('cors');
const massive = require('massive');
const redis = require('redis');
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

client = redis.createClient({
    port      : 6379,               // replace with your port
    host      : '192.168.1.100',        // replace with your hostanme or IP address
    password  : 'ultr@p@55w!rd',    // replace with your password
    // optional, if using SSL
    // use `fs.readFile[Sync]` or another method to bring these values in
    tls       : {
      key  : stringValueOfKeyFile,  
      cert : stringValueOfCertFile,
      ca   : [ stringValueOfCaCertFile ]
    }
  });

massive(process.env.connectionString)
.then(db => {
    app.set('db', db);

})
.catch(err => {
    console.debug("Error connecting to db!", err)
})

app.listen(3131, () => console.log("Server is running now!"));