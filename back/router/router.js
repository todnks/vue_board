const mysql = require('mysql')
const con = mysql.createConnection(require('../config/dbconfig.js'))

con.connect((err) => {
    if(err){
        console.log(err)
    } else{
        console.log("your mysql connect")
    }
})
