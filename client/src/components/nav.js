import React, { Component } from 'react'
import styled from 'styled-components'
import palette from './palette'

const Nav = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Teko&display=swap');
  font-family: 'Teko', sans-serif;

  font-size: 35px;
  color: ${palette.nav};

  a, strong {
    margin-right: 20px;
  }

  a {
    text-decoration: none;
  }

  strong {
    border-bottom: 2px solid ${palette.text}
  }

  #main-nav {
    width: 700px;
    margin: auto;
  }
`

export default (props) => {
  return (
    <Nav>
      <div id="main-nav">
      { ['home'].includes(props.section)
          ? <strong>home</strong>
          : <a href='/'>.</a>
      }
      { ['blog'].includes(props.section)
          ? <strong>blog</strong>
          : <a href='/blog'>blog</a>
      }
      </div>
    </Nav>

  )
}