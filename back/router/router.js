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
        const sql = `select * from member where id=? and pw=?`
            con.query(sql, [id, pw], (err, results,field)=>{
                console.log(results)
                res.json(results)
            })
    })

    app.post('/member/join', (req, res) => {
        const id = req.body.id
        const pw = req.body.pw
        const name = req.body.name
        const chk = `select count(*) from member where id=?`
        const sql = `insert into member set id=?,pw=?,name=?`
        con.query(chk,[id], (err, results, field) => {
            res.json(results)
            console.log(results[0])
            if (results[0]['count(*)'] == 0) {
                con.query(sql,[id,pw,name])
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
        const sql = `insert into board set writer=?, subject=?, content=?, date=now()`
        con.query(sql,[writer, subject, content],(err,results,field) => {
            res.json(results)
        })
    })

    app.get('/board/list/:idx', (req,res) =>{
        const idx = req.params.idx
        const sql = `select * from board where idx=?`
        con.query(sql,[idx],(err,results) =>{
                res.json(results)
        })
        con.query(`update board set hit=hit+1 where idx=?`,[idx])
    })

}