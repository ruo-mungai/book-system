import {React,useEffect,useState} from 'react'
import Axios from 'axios'


function Home() {
    const [books, setBook]= useState([])

    useEffect(()=>
    {
        const fetchAllBooks= async ()=>{
            try{
                const res= await Axios.get("http://localhost:8800/books")
                console.log(res)
            }
            catch (err){
                console.log(err)
            }
        }
        fetchAllBooks();
    })
  return (
    <div>Home</div>
  )
}

export default Home