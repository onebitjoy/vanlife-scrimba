import { useState } from "react"
import "./hostlogin.css"
import { NavLink, useSearchParams } from "react-router-dom";

function HostLogin() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [params, setParams] = useSearchParams()
  const message = params.get('message')
  function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (!email || !password) {
      console.log("Please enter your credentials")
      return null;
    }
    if (validateEmail(email)) {
      console.log({ email, password })
    } else {
      console.log("Invalid email!")
    }
    setEmail('')
    setPassword('')
  }

  return (
    <>
      {message !== null &&
        <div className="toast">
          <p>
            <span className="x-mark">❌</span> {message}
          </p>
        </div>
      }
      <div className="loginCont">
        <div className="nameCont">

          <h1 className="h1login">Sign in to your account</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <input type="email" name="email" placeholder="Email" autoComplete="true" required value={email}
            onChange={e => setEmail(e.target.value)}
          />

          <input type="password" name="password" placeholder="Password" autoComplete="true" required minLength={8} value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <button className="loginBtn">Log in</button>
        </form>

        <span className="signup">Not a user yet? <NavLink className="signuplink" to="/signup">signup</NavLink></span>
      </div>
    </>

  )
}

export default HostLogin
