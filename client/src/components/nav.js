import React, { Component } from 'react'
import styled from 'styled-components'
import palette from './palette'

const Nav = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Teko&display=swap');
  font-family: 'Teko', sans-serif;

  font-size: 35px;
  color: ${palette.green};

  a, strong {
    margin-right: 5px;
  }

  a {
    text-decoration: none;
  }

  strong {
    border-bottom: 2px solid ${palette.pink}
  }
`

export default (props) => {
  return (
    <div>
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
    </Nav>
    <div style={{paddingTop: '25px'}}></div>
    </div>
  )
}