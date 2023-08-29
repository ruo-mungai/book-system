import React from 'react'

function Add() {
  return (
    <div className='form'>
     <input type='text' placeholder='title' onChange={handleChange} name='title'/>
     <input type='text' placeholder='cover pictue link' onChange={handleChange}  name='cover'/> 
     <input type='text' placeholder='desc' onChange={handleChange}  name='desc'/>
    </div>
  )
}

export default Add