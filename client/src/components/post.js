import React, {useEffect, useState}  from "react"
import client from "../api"
import ReactMarkdown from 'react-markdown'

export default function Post(props) {

  const [entry, setEntry] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const res = await client.getEntry(props.id)
      console.log('res', res)
      setEntry(res)
    }
    fetchData()
  }, [])


  return (
    <div>
      {
        !entry
          ? <em>Loading...</em>
          : <div>
              <h1>{entry.fields.title}</h1>
              <div><em>by {entry.fields.author.fields.name}</em></div>
              <div><ReactMarkdown source={entry.fields.body} /></div>
            </div>
      }
    </div>
  )
}