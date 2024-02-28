async function getApiVans(url) {
  const d = {
    data: null, error: null
  }
  try {
    const data = await fetch(url)
    d.data = await data.json()
  } catch (error) {
    d.error = error.message
  }
  return d
}

export default getApiVans