import axios from 'axios'
import {React, useState} from 'react'
import { useNavigate } from 'react-router-dom'


function Add() {
const [book, setBook]= useState({
  title:"",
  desc:"",
  cover:""
}) 

const handleChange= (e)=>{
  setBook (prev=>({ ...prev, [e.target.name]: e.target.value
      
    })
  )
}

const navigate= useNavigate()

const handleClick= async (e)=>{
  e.preventDefault()

  try{
   await axios.post("http://localhost:8800/books", book)

   navigate("/")
  }

  catch{

  }

}

// console.log (book)
  return (
    <div className='form'>
     <input type='text' placeholder='title' onChange={handleChange} name='title'/>
     <input type='text' placeholder='cover pictue link' onChange={handleChange}  name='cover'/> 
     <input type='text' placeholder='desc' onChange={handleChange}  name='desc'/>
     <button onClick={handleClick}>Add a book</button>
    </div>
  )
}

export default Add