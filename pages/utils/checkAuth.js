import { redirect } from "react-router-dom"

export default async function checkAuth() {
  const isLoggedIn = localStorage.getItem("loggedIn")
  if (!isLoggedIn) {
    throw redirect("/login?message=You must login first!")
  }
  return null
}