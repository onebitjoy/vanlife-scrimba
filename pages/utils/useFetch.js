import { useEffect, useState } from "react"

export default function useFetch({ url, dependencies = null }) {

  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  async function fetcher({ url, signal }) {
    try {
      setLoading(true)
      const data = await fetch(url, { signal: signal })
      const jsonData = await data.json()
      setData(jsonData)
    } catch (error) {
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    const controller = new AbortController()
    fetcher({ url, signal: controller.signal })
    return () => { controller.abort() }
  }, dependencies)

  return { data, loading, error, fetcher }
}