function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

async function fetchApiData({ url, data }) {
  console.log("url: ", url)
  console.log("data: ", data)

  const res = await fetch(url, {
    method: "POST",
    // mode: "cors",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": true
    },
    body: JSON.stringify(data)
  })

  // await delay(5000)
  return await res.json()
}

export async function signup({ email, password, username }) {
  if (!email || !password || !username) { throw "Error: Please enter your credentials" }
  const url = "https://van-server.onrender.com/users/signup"
  if (validateEmail(email)) {
    return await fetchApiData({
      url,
      data: {
        username, email, password,
      }
    })
  } else {
    return { error: "Error: Can't signin. Please check and re-enter your credentials." }
  }
}

export default async function loginUser(email, password) {
  if (!email || !password) { throw "Error: Please enter your credentials" }
  const url = "https://van-server.onrender.com/users/login"
  if (validateEmail(email)) {
    return await fetchApiData({
      url,
      data: {
        email, password
      }
    })
  } else {
    return { error: "Error: Can't login. Please check and re-enter your credentials." }
  }
}

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}