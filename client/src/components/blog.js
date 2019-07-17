import React, {useEffect, useState}  from "react"
import client from "../api"

export default function Blog() {
  const [data, setData] = useState({ entries: [] })

  useEffect(() => {
    const fetchData = async () => {
      const q = { content_type: 'post' }
      const entries = await client.getEntries(q)

      setData(entries)
    }
    fetchData()
  }, [])

  return (
    <div>
      <h1>Blog</h1>
      {
        data.items
          ? <ul>
              {data.items.map(item => (
                <li key={item.fields.slug}>{item.fields.title}</li>
              ))}
            </ul>
          : <em>Loading...</em>
      }
    </div>
  )
}