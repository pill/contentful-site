import React, { Component } from "react"
import ReactDOM from "react-dom"
import Blog from "./blog"
import Work from "./work"
import Navigation from "./nav"
import Post from "./post"
import { BlogProvider } from "./blog/blogContext";
import { parseUrl } from '../utils'

import styled from 'styled-components'
import palette from './palette'

const Main = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

  background-color: white;
  font-family: sans-serif;

  h1 {
    font-family: 'Roboto', sans-serif;
    color: ${palette.sapphire};
  }

  ul {
    list-style: none;
    padding: 0;
  }

  a {
    text-decoration: none;
    &:link, &:visited {
      color: ${palette.green};
    }
    &:hover {
      color: ${palette.pink};
    }
  }
`

class MainContainer extends Component {

  render() {
    let res = []
    const {parts, searchParams} = parseUrl()
    const section = parts.length > 0 ? parts[0] : ''
    const postId = parts[1]

    res.push(<Navigation key="nav" section={section} />)

    let middle = null
    switch(section) {
      case 'work':
        middle = <Work key="work"/>
        break
      case 'post':
        middle = <Post key="post" id={postId} />
        break
      case 'blog':
      default:
        middle = <Blog key="blog" searchParams={searchParams} />
    }
    res.push(middle)

    return (
      <BlogProvider>
        <Main>{res}</Main>
      </BlogProvider>
    )
  }

}
export default MainContainer