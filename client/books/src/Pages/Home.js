import {React,useEffect,useState} from 'react'
import Axios from 'axios'


function Home() {
    const [books, setBook]= useState([])

    useEffect(()=>
    {
        const fetchAllBooks= async ()=>{
            try{
                const res= await Axios.get("http://localhost:8800/books")
                setBook(res.data)
            }
            catch (err){
                console.log(err)
            }
        }
        fetchAllBooks();
    })
  return (
    <div>
        <h1>Pato's library</h1>
        <div className="books">
        {books.map((book) => (
          <div key={book.id} className="book">
            <img src={book.cover} alt="" />
            <h2>{book.title}</h2>
            <p>{book.desc}</p>
            </div>))}
           
        </div>
    </div>
  )
}

export default Home