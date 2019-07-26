import React, {useEffect, useState, useContext}  from 'react'
import client from '../api'
import ReactMarkdown from 'react-markdown'
import * as moment from 'moment'
import useBlog from './blog/useBlog'

export default function Post(props) {

  const { entry, setEntry } = useBlog()

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
              <div>
                { entry.fields.tags ? 'Tags:' : '' }
                {
                  entry.fields.tags && entry.fields.tags.map(tag => {
                    return <div key={tag.fields.slug}>{tag.fields.text}</div>
                  })
                }
              </div>
            </div>
      }
    </div>
  )
}