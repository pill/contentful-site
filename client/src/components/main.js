import React, { Component } from "react"
import ReactDOM from "react-dom"
import Blog from "./blog"
import Work from "./work"
import Navigation from "./navigation"
import Footer from "./footer"

class MainContainer extends Component {

  constructor() {
    super();
  }

  render() {
    let res = []
    res.push(<Navigation key="nav" />)

    switch(this.getSection()) {
      case 'work':
        res.push(<Work key="work" />)
        break
      case 'blog':
      default:
        res.push(<Blog key="blog" />)
    }

    res.push(<Footer key="footer" />)

    return <div>{res}</div>

  }

  /**
   * Return section of the site you are on from current url
   */
  getSection() {
    const parsedUrl = new URL(window.location.href)
    console.log('url', parsedUrl)
    const paths = parsedUrl.pathname.split('/').filter(p => p.length > 0)
    return paths.length > 0 ? paths[0] : ''
  }

}
export default MainContainer