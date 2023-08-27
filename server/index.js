import Express  from "express";
import mysql from "mysql";
import cors from "cors"

const app= Express (); // creating a variable to hold express function

app.use(Express.json())
app.use(cors())

//connecting to mysql

const db= mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        password: "2000",
        database: "test"

    }
)

app.get ("/",(req,res)=>{
    res.json("CONNECTED TO BACKED END")
})

// get all books
app.get ("/books",(req,res)=>{
    const books="SELECT * FROM books"
    db.query(books,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)

    })
})

app.post ("/books",(req,res)=>{
    const books="INSERT INTO books (`title`,`desc`,`cover`) VALUE (?)"
    const values =[
        req.body.title,
        req.body.desc,
        req.body.cover
    ]
    
    db.query(books,[values],(err,data)=>{
        if(err) return res.json(err)
        return res.json("data posted successfully")

    })

})

app.listen(8800,()=>{
    console.log("connection ok continue")
})