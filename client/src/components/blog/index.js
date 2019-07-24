import React, { useEffect }  from "react"
import client from "../../api"
import useBlog from './useBlog'
import Paginator from './paginator'

export default function Blog({ searchParams }) {

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
    <div>
      <h1>Blog</h1>
      {
        !entryList.length
          ? <em>Loading...</em>
          : <div>
              <ul>
                {entryList.map(item => (
                  <li key={item.fields.slug}>
                    <a href={'/post/'+item.sys.id}>{item.fields.title}</a>
                  </li>
                ))}
              </ul>
              <Paginator totalPages={totalPages} p={p} rpp={rpp}/>
            </div>
      }
    </div>
  )
}