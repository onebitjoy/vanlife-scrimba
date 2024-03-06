import { useState } from "react"
import "./hostlogin.css"
import { Form, NavLink, redirect, useActionData, useNavigation, useSearchParams } from "react-router-dom";
import loginUser from "../utils/loginUser.js"

const STATUS = Object.freeze({
  IDLE: "idle",
  SUBMITTING: "submitting",
  LOADING: "loading"
})

export async function action({ request }) {
  const formData = await request.formData()
  const email = formData.get("email")
  const password = formData.get("password")

  try {
    const userData = await loginUser(email, password)
    console.log("UserData inside HostLogin: ", userData)
    if (!userData.error) {
      localStorage.setItem("loggedIn", true)
      return redirect("/host")
    } else {
      return userData.error
    }
  } catch (err) {
    return err.message || "Something went wrong.."
  }
}

//////////
function HostLogin() {

  const error = useActionData()
  const navigate = useNavigation()

  const isIdle = navigate.state === STATUS.IDLE
  const isLoading = navigate.state === STATUS.LOADING
  const isSubmitting = navigate.state === STATUS.SUBMITTING

  const [params, setParams] = useSearchParams()
  const message = params.get('message')

  async function handleSubmit(e) {
    e.preventDefault()
    setParams({})
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
          <input disabled={isSubmitting || isLoading} type="email" name="email" placeholder="Email" autoComplete="true" required />
          <input disabled={isSubmitting || isLoading} type="password" name="password" placeholder="Password" autoComplete="true" required minLength={8} />
          <button disabled={isSubmitting || isLoading} className="loginBtn">
            {isIdle && "log in"}
            {isSubmitting && "logging in..."}
            {isLoading && "redirecting..."}
          </button>
        </Form>

        <span className="signup">Not a user yet? <NavLink className="signuplink" to="/signup">signup</NavLink></span>
      </div>
    </>

  )
}

export default HostLogin
