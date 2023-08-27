import Express  from "express";
import mysql from "mysql";

const app= Express (); // creating a variable to hold express function

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

// ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '2000'
app.get ("/books",(req,res)=>{
    const books="SELECT * FROM books"
    db.query(books,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)

    })
})

app.listen(8800,()=>{
    console.log("connection ok continue")
})