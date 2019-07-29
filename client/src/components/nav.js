import React, { Component } from 'react'
import styled from 'styled-components'
import palette from './palette'

const Nav = styled.div`
  font-family: impact;
  font-size: 30px;
  color: ${palette.green};

  a:visited {
    color: ${palette.green};
  }

  a, strong {
    margin-right: 5px;
  }

  a {
    text-decoration: none;
  }

  strong {
    text-decoration: underline;
  }
`

export default (props) => {
  return (
    <Nav>
      { ['blog'].includes(props.section)
          ? <strong>blog</strong>
          : <a href='/blog'>blog</a>
      }
      &nbsp;
      { ['work'].includes(props.section)
          ? <strong>work</strong>
          : <a href='/work'>work</a>
      }
    <div id="h-divider"></div>
    </Nav>
  )
}