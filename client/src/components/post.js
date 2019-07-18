import React, {useEffect, useState}  from "react"
import client from "../api"

export default function Post(props) {
  return (
    <div>
      <h1>Post</h1>
      <div>{props.id}</div>
    </div>
  )
}