import React, { Component } from "react"
import ReactDOM from "react-dom"
import Blog from "./blog"
import Work from "./work"
import Navigation from "./nav"
import Footer from "./footer"
import Post from "./post"
import { BlogProvider } from "./blog/blogContext";

class MainContainer extends Component {

  constructor() {
    super();
  }

  render() {
    let res = []
    const parts = this.getPathParts()
    const section = parts.length > 0 ? parts[0] : ''

    res.push(<Navigation key="nav" section={section} />)

    let middle = null
    switch(section) {
      case 'work':
        middle = <Work key="work"/>
        break
      case 'post':
        middle = <Post key="post" id={parts[1]} />
        break
      case 'blog':
      default:
        middle = <Blog key="blog" />
    }
    res.push(middle)
    res.push(<Footer key="footer" />)

    return (
      <BlogProvider>
        <div>{res}</div>
      </BlogProvider>
    )
  }

  /**
   * Return parts of the path from url
   */
  getPathParts() {
    const parsedUrl = new URL(window.location.href)
    console.log('url', parsedUrl)
    const paths = parsedUrl.pathname.split('/').filter(p => p.length > 0)
    return paths
  }

}
export default MainContainer