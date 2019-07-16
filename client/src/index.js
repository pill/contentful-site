import client from './api'
import React, { Component } from "react"
import MainContainer from './components/MainContainer'
import ReactDOM from "react-dom"

const q = {
  content_type: 'post'
}

// just a contentful test...
const entries = client.getEntries(q)
  .then((res) => {
    console.log(res)
    res.items.map((item) => {
      console.log(item.fields.title)
    })
})
.catch(e=>console.log('error',e))

const wrapper = document.getElementById("main-site")
wrapper ? ReactDOM.render(<MainContainer />, wrapper) : false