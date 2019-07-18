import React, {useEffect, useState}  from "react"
import client from "../api"

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
      <h1>Post</h1>
      <div>{props.id}</div>
    </div>
  )
}