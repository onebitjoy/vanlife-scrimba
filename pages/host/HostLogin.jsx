import { useState } from "react"
import "./hostlogin.css"
import { Form, NavLink, redirect, useSearchParams } from "react-router-dom";
import loginUser from "../utils/loginUser.js"

const STATUS = Object.freeze({
  IDLE: "idle",
  SUBMITTING: "submitting",
  ERROR: "error"
})

export async function action({ request }) {
  const formData = await request.formData()
  const email = formData.get("email")
  const password = formData.get("password")

  try {
    const userData = await loginUser(email, password)
    if (!userData.error) {
      localStorage.setItem("loggedIn", true)
      return redirect("/host")
    }
  } catch (err) {
    console.log("Can't login!")
    return null
  }
}

//////////
function HostLogin() {
  const [error, setError] = useState(null)
  const [status, setStatus] = useState(STATUS.IDLE)
  const isSubmitting = status === STATUS.SUBMITTING

  const [params, setParams] = useSearchParams()
  const message = params.get('message')

  async function handleSubmit(e) {
    e.preventDefault()
    setParams({})
    setStatus(STATUS.SUBMITTING)
    setError(null)
  }

  return (
    <>
      <div>
        {message !== null && <div className="toast">
          <p> <span className="x-mark">❌</span> {message} </p>
        </div>
        }
      </div>
      <div className="loginCont">
        <div className="nameCont">
          <h1 className="h1login">Sign in to your account</h1>
          {error !== null && <p className="red">{error}</p>}
        </div>

        <Form method="post" replace>
          <input type="email" name="email" placeholder="Email" autoComplete="true" required />
          <input type="password" name="password" placeholder="Password" autoComplete="true" required minLength={8} />
          <button disabled={isSubmitting} className="loginBtn">{isSubmitting ? "Logging in..." : "Log in"}</button>
        </Form>

        <span className="signup">Not a user yet? <NavLink className="signuplink" to="/signup">signup</NavLink></span>
      </div>
    </>

  )
}

export default HostLogin
