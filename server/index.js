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

app.listen(8800,()=>{
    console.log("connection ok continue")
})