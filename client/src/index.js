import React, { Component } from "react"
import MainContainer from './components/main'
import ReactDOM from "react-dom"

const wrapper = document.getElementById("main-site")
wrapper ? ReactDOM.render(<MainContainer />, wrapper) : false