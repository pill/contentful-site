import React, { useEffect }  from "react"

import Paginator from './paginator'
import client from "../../api"
import moment from 'moment'
import palette from '../palette'
import styled from 'styled-components'
import useBlog from './useBlog'

export default function Blog({ searchParams }) {

  const EntryList = styled.div`
    #entry-container {
      li {
        div {
          display: inline-block;

          h1 {
            margin-bottom: 5px;
          }

          img {
            float: left;
            border: 2px solid ${palette.imageBorder};
            margin: 5px 0 15px 0;
          }

          .date {
            font-family: arial
            font-size: 15px;
            font-weight: bold;
            color: ${palette.subHeading};
            line-height: 30px;
            margin-bottom: 10px;
          }

        }
      }
    }
  `

  const { setState, entryList, totalPages } = useBlog()

  // paging params
  const p = searchParams.get('p') || 1
  const rpp = searchParams.get('rpp') || 10

  useEffect(() => {
    const fetchData = async () => {
      const q = {
        content_type: 'post',
        skip: (p - 1) * rpp,
        limit: rpp
      }
      const res = await client.getEntries(q)
      console.log('entries res', res)
      // do with one call, avoid re-renders
      setState(state => ({
        ...state,
        entryList: res.items,
        totalPages: Math.ceil(res.total/rpp)
      }))
    }
    fetchData()
  }, [])

  return (
    <EntryList>
      {
        !entryList.length
          ? <em>Loading...</em>
          : <div id="entry-container">
              <ul>
                {entryList.map(item => (
                  <li key={item.fields.slug}>
                    <div>
                      <a href={'/post/'+item.sys.id}>
                        <h1>{item.fields.title}</h1>
                        <div class="date">{moment(item.sys.createdAt).format('MMMM Do YYYY, h:mm a')}</div>
                        {
                          item.fields.thumb
                            ? <img
                                src={item.fields.thumb.fields.file.url}
                                width="560px" />
                            : ''
                        }
                      </a>
                    </div>
                  </li>
                ))}
              </ul>
              <Paginator totalPages={totalPages} p={p} rpp={rpp}/>
            </div>
      }
    </EntryList>
  )
}