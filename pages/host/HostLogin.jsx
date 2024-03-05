import { useState } from "react"
import "./hostlogin.css"
import { NavLink, useNavigate, useSearchParams } from "react-router-dom";
import loginUser from "../utils/loginUser.js"

const STATUS = Object.freeze({
  IDLE: "idle",
  SUBMITTING: "submitting",
  ERROR: "error"
})

//////////
function HostLogin() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)

  const [status, setStatus] = useState(STATUS.IDLE)
  const isSubmitting = status === STATUS.SUBMITTING

  const [params, setParams] = useSearchParams()
  const message = params.get('message')
  const navigate = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault()
    setParams({})
    setStatus(STATUS.SUBMITTING)
    setError(null)

    try {
      const userData = await loginUser(email, password)
      if (!userData.error) {
        navigate("/host", { replace: true })
      }

    } catch (err) {
      setError(err)
    } finally {
      setStatus(STATUS.IDLE)
      setEmail('')
      setPassword('')
    }
  }

  return (
    <>
      <div>
        {message !== null && <div className="toast">
          <p>
            <span className="x-mark">❌</span> {message}
          </p>
        </div>
        }
      </div>
      <div className="loginCont">
        <div className="nameCont">
          <h1 className="h1login">Sign in to your account</h1>
          {error !== null && <p className="red">{error}</p>}
        </div>
        <form onSubmit={handleSubmit}>
          <input type="email" name="email" placeholder="Email" autoComplete="true" required value={email}
            onChange={e => setEmail(e.target.value)}
          />

          <input type="password" name="password" placeholder="Password" autoComplete="true" required minLength={8} value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <button
            disabled={isSubmitting}
            className="loginBtn"
          >{isSubmitting ? "Logging in..." : "Log in"}</button>
        </form>

        <span className="signup">Not a user yet? <NavLink className="signuplink" to="/signup">signup</NavLink></span>
      </div>
    </>

  )
}

export default HostLogin
