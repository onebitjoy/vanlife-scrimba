import { useState } from "react"
import "./hostlogin.css"

function HostLogin() {

  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  function handleSubmit(e) {
    e.preventDefault()
    if (!email || !password) {
      console.log("Email or Password is not correct!")
    }
    console.log({ email, password })
  }

  function handleEmail(em) {
    setEmail(em)
  }
  function handlePassword(ps) {
    setPassword(ps)
  }


  return (
    <div className="loginCont">
      <div className="nameCont">
        <h1 className="h1login">Sign in to your account</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="Email" autoComplete="true" required
          onChange={e => handleEmail(e.target.value)}
        />

        <input type="password" name="password" placeholder="Password" autoComplete="true" required
          onChange={e => handlePassword(e.target.value)}
        />
        <button className="loginBtn">Log in</button>
      </form>
    </div>
  )
}

export default HostLogin
