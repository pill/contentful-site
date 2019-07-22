import React, {useEffect, useState, useContext}  from "react"
import client from "../api"
import ReactMarkdown from 'react-markdown'
import * as moment from 'moment'
import { BlogContext } from './blogContext'

export default function Post(props) {

  // local
  const [entry, setEntry] = useState(null)
  // global
  const [state, setState] = useContext(BlogContext)

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
              <div>{moment(entry.sys.createdAt).format('MMMM Do YYYY, h:mm:ss a')}</div>
              <div><em>by {entry.fields.author.fields.name}</em></div>
              <div><ReactMarkdown source={entry.fields.body} /></div>
            </div>
      }
    </div>
  )
}