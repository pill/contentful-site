import React, { useEffect }  from "react"
import client from "../../api"
import useBlog from './useBlog'
import Paginator from './paginator'

import styled from 'styled-components'
import palette from '../palette'

export default function Blog({ searchParams }) {

  const EntryList = styled.div`
    li {
      padding: 10px;
      div {
        display: inline-block;
        img {
          float: left;
          border: 1px solid #ddd;
          margin: 5px 5px 10px 5px;
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
          : <div>
              <ul>
                {entryList.map(item => (
                  <li key={item.fields.slug}>
                    <div>
                    <a href={'/post/'+item.sys.id}>
                      <h1>{item.fields.title}</h1>
                      {
                        item.fields.thumb
                          ? <img
                              src={item.fields.thumb.fields.file.url}
                              width="500px" />
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