const mysql = require('mysql')
const con = mysql.createConnection(require('../config/dbconfig.js'))

con.connect((err) =>{
    if(err) {
        console.log(err)
    } else {
        console.log("mysql is connect");
    }
})

module.exports = (app,fs) => {

    app.get('/', (req,res) =>{
        res.send('hello world')
    })
    
    app.post('/member/login', (req,res) =>{
        const id = req.body.id
        const pw = req.body.pw
        const sql = `select * from member where id='${id}' and pw='${pw}'`
        con.query(sql, (err,results,field)=>{
            console.log(results)
            res.json(results)
        })
    })

    app.post('/member/join', (req, res) => {
        const id = req.body.id
        const pw = req.body.pw
        const name = req.body.name
        const chk = `select count(*) from member where id='${id}'`
        const sql = `insert into member set id='${id}',pw='${pw}',name='${name}'`
        con.query(chk, (err, results, field) => {
            res.json(results)
            if (results[0]['count(*)'] == 0) {
                con.query(sql)
            }
        })
    })

    app.get('/board', (req,res) =>{
        const sql = 'select * from board order by date desc'
        con.query(sql,(err,results) => {
            res.json(results)
        })
    })
    
    app.post('/board/write', (req,res) =>{
        const writer = req.body.writer
        const subject = req.body.subject
        const content = req.body.content
        const sql = `insert into board set writer='${writer}', subject='${subject}',content='${content}',date=now()`
        console.log(sql)
        con.query(sql,(err,results) =>{
            res.json(results)
        })
    })
}