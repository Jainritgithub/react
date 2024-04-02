import React, { useState } from 'react'

const App = () => {
  const [formdata, setformdata] = useState({
    name: '',
    email: '',
    password: ''
  })

  const handleInputChange = (e) => {
    const { name, value} = e.target
    setformdata({...formdata, [name]: value})
  }

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(formdata)
  }
  return (
    <div>
      <form onSubmit={submitHandler} action="">
        <input type="text" placeholder='write your name here...' value={formdata.name} onChange={handleInputChange} name='name' />
        <input type="email" placeholder='write your name email...' value={formdata.email} onChange={handleInputChange} name='email' />
        <input type="password" placeholder='write your password here...' value={formdata.password} onChange={handleInputChange} name='password' />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default App
