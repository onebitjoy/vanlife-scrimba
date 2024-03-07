import { redirect } from "react-router-dom"

export default async function checkAuth(request = {}) {
  const isLoggedIn = localStorage.getItem("loggedIn")
  const urlParsable = URL.canParse(request.url)

  const pathname = new URL(request.url).pathname

  if (!isLoggedIn) {
    throw redirect(`/login?message=You must login first!${urlParsable ? "&redirectTo=" + pathname : ""}`)
  }
  return null
}
