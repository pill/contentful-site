import React, { useEffect }  from "react"
import client from "../../api"
import useBlog from './useBlog'
import Paginator from './paginator'

import styled from 'styled-components'
import palette from '../palette'

export default function Tag({ id, searchParams }) {

  const EntryList = styled.div`
    #entry-container {
      li {
        div {
          display: inline-block;
          img {
            float: left;
            border: 2px solid ${palette.imageBorder};
            margin: 5px 0 10px 0;
          }
        }
      }
    }
  `

  const SelectedTag = styled.div`
    @import url('https://fonts.googleapis.com/css?family=Bebas+Neue&display=swap');
    font-size: 20px;

    #selected-tag-container {
      color: ${palette.text};
      width: 560px;
      margin-top: 50px;
      padding-bottom: 15px;
      border-bottom: 1px dotted ${palette.imageBorder};

      .tag {
        font-family: "Bebas Neue";

        font-size: 64px;
        color: ${palette.subHeading};
        background: ${palette.background};
        text-transform: uppercase;
        margin-right: 10px;
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
        'metadata.tags.sys.id[in]': id,
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
    <div>
    <SelectedTag>
      <div id="selected-tag-container">
      <span class="tag">{id}</span> posts
      </div>
    </SelectedTag>
    <EntryList>
      <div>
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
      </div>
    </EntryList>
    </div>
  )
}