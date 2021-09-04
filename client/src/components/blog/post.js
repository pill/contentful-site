import React, {useEffect, useState, useContext}  from 'react'
import client from '../../api'
import * as moment from 'moment'
import useBlog from './useBlog'
import ReactMarkdown from 'react-markdown'
import styled from 'styled-components'
import palette from '../palette'

export default function Post(props) {

  const BlogPost = styled.div`
    #date {
      font-family: arial
      font-size: 15px;
      font-weight: bold;
      color: ${palette.subHeading};
      line-height: 30px;
      margin-bottom: 10px;
    }

    #post-container {
      margin-top: 20px;
    }

    #post-body {
      font-family: georgia;
      line-height: 25px;
      margin-bottom: 25px;
    }

    #post-body ul {
      list-style-type: circle;
    }

    #tag-label {
      font-weight: bold;
      margin-bottom: 20px;
      color: ${palette.subHeading};
    }

    .tag {
      font-size: 13px;
      background: ${palette.background};
      border:1px solid ${palette.imageBorder};
      border-radius:5px;
      text-decoration:none;
      padding:8px;
      margin:3px;
      text-transform:uppercase;
    }

    .tag:hover {
      color: ${palette.background};
      background: ${palette.subHeading};
    }
  `

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
    <BlogPost>
    <div id="post-container">
      {
        !entry
          ? <div class="loading"><em>Loading...</em></div>
          : <div>
              <h1>{entry.fields.title}</h1>
              <div id="date">{moment(entry.sys.createdAt).format('MMMM Do YYYY, h:mm a')}</div>
              <div id="post-body"><ReactMarkdown
                escapeHtml={false}
                children={entry.fields.body}
              /></div>

              <div>
                <div id="tag-label">{ entry.metadata.tags ? 'Tags:' : '' }</div>
                {
                  entry.metadata.tags && entry.metadata.tags.map(tag => {
                    return <a href={`/tags/${tag.sys.id}`} class="tag" key={tag.sys.id}>{tag.sys.id}</a>
                  })
                }
              </div>
            </div>
      }
    </div>
    </BlogPost>
  )
}