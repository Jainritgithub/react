import React from 'react'
import { useState } from 'react'

const App = () => {
  const [username, setusername] = useState('')
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const [graduated, setgraduated] = useState(false)
  const [radio, setradio] = useState(false)
  const [option, setoption] = useState("option 1")
  const [textarea, settextarea] = useState("")


  const submitHandler = (e) => {
        e.preventDefault();
        console.log({username, email, password, graduated,radio,option,textarea})
  }



  return (
    <>
    <h1>Registeration Form</h1>
      <form onSubmit={submitHandler}>
        <input type="text" placeholder='write your name here...' name='name' value={username} onChange={(e)=> setusername(e.target.value)} /> <br /><br />
        <input type="email" placeholder='write your name email...' name='email' value={email} onChange={(e)=> setemail(e.target.value)} /><br /><br />
        <input type="password" placeholder='write your password here...' name='password' value={password} onChange={(e)=> setpassword(e.target.value)}/><br /><br />
        <input type="checkbox" checked={graduated} onChange={(e)=> setgraduated(e.target.checked)} /> Graduated <br /> <br />
        <input type="radio" name='a' defaultValue={"male"} checked={radio === "male" ? true : false} onChange={(e)=> setradio(e.target.value)}/> Male 
        <input type="radio" name='a' defaultValue={"female"} checked={radio === "female" ? true : false} onChange={(e)=> setradio(e.target.value)}/> Female  <br /><br />
        <select value={option} onChange={(e)=> setoption(e.target.value)}>
          <option value="option 1">Option 1</option>
          <option value="option 2">Option 2</option>
          <option value="option 3">Option 3</option>
        </select> <br /><br />
        <textarea value={textarea} onChange={(e)=> settextarea(e.target.value)}></textarea> <br /><br />
        <button type='submit'>Submit</button>
      </form>
    </>
  )
}

export default App
