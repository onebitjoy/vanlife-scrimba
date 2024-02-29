async function getApiVans(url) {
  const res = await fetch(url)
  if (!res.ok) {
    throw {
      message: "Failed to fetch vans",
      status: res.status,
      statusText: res.statusText
    }
  }

  return {
    data: await res.json(),
    error: null
  }
}

// await getApiVans("https://van-server.onrender.com/api/dfgdfg")
export default getApiVans