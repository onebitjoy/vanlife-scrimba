import { redirect } from "react-router-dom"

export default async function checkAuth() {
  const isLoggedIn = false
  // const isLoggedIn = true
  if (!isLoggedIn) {
    throw redirect("/login?message=You must login first!")
  }
  return null
}