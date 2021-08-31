import React, {useEffect, useState, useContext}  from 'react'
import client from '../api'
import * as moment from 'moment'
import useBlog from './blog/useBlog'
import ReactMarkdown from 'react-markdown'
import styled from 'styled-components'
import palette from './palette'

export default function Post(props) {

  const BlogPost = styled.div`
    #date {
      font-family: arial
      font-size: 15px;
      font-weight: bold;
      color: ${palette.subHeading};
      line-height: 30px;
    }

    #post-body {
      font-family: georgia;
      line-height: 25px;
      margin-bottom: 20px;
    }

    #tag-label {
      font-weight: bold;
      margin-bottom: 10px;
      color: ${palette.subHeading};
    }
  `;

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
    <div>
      {
        !entry
          ? <em>Loading...</em>
          : <div>
              <h1>{entry.fields.title}</h1>
              <div id="date">{moment(entry.sys.createdAt).format('MMMM Do YYYY, h:mm a')}</div>
              <div id="post-body"><ReactMarkdown
                escapeHtml={false}
                children={entry.fields.body}
              /></div>

              <div>
                <div id="tag-label">{ entry.fields.tags ? 'Tags:' : '' }</div>
                {
                  entry.fields.tags && entry.fields.tags.map(tag => {
                    return <div class="tag" key={tag.fields.slug}>{tag.fields.text}</div>
                  })
                }
              </div>
            </div>
      }
    </div>
    </BlogPost>
  )
}