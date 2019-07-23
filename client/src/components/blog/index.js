import React, {useEffect, useState}  from "react"
import client from "../../api"
import useBlog from './useBlog'

export default function Blog() {
  const { setEntryList, entryList } = useBlog()

  useEffect(() => {
    const fetchData = async () => {
      const q = { content_type: 'post' }
      const res = await client.getEntries(q)
      console.log('entries res', res)
      setEntryList(res.items)
    }
    fetchData()
  }, [])

  return (
    <div>
      <h1>Blog</h1>
      {
        !entryList.length
          ? <em>Loading...</em>
          : <ul>
              {entryList.map(item => (
                <li key={item.fields.slug}>
                  <a href={'/post/'+item.sys.id}>{item.fields.title}</a>
                </li>
              ))}
            </ul>
      }
    </div>
  )
}