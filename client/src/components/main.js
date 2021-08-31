import React, { Component } from "react"
import Blog from "./blog"
import Work from "./work"
import Navigation from "./nav"
import Post from "./post"
import { BlogProvider } from "./blog/blogContext"
import { parseUrl } from '../utils'

import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'

import palette from './palette'

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${palette.background};
  }
  .main-site {
    width: 560px;
    margin: auto;
  }
`;

const Main = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

  font-family: sans-serif;
  color: ${palette.text};

  h1 {
    font-family: 'Roboto', sans-serif;
    color: ${palette.heading};
  }

  ul {
    list-style: none;
    padding: 0;
  }

  a {
    text-decoration: none;
    &:link, &:visited {
      color: ${palette.text};
    }
    &:hover {
      color: ${palette.text};
    }
  }
`

class MainContainer extends Component {

  render() {
    let res = []
    const {parts, searchParams} = parseUrl()
    const section = parts.length > 0 ? parts[0] : ''
    const postId = parts[1]

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
        <GlobalStyle />
        <Main>
          <Navigation key="nav" section={section} />
          <div class="main-site">{res}</div>
        </Main>
      </BlogProvider>
    )
  }

}
export default MainContainer