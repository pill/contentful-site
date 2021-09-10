import React, { Component } from 'react'
import styled from 'styled-components'
import palette from './palette'

const Nav = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Teko&display=swap');
  @import url('https://fonts.googleapis.com/css?family=Azeret+Mono&display=swap');
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
    border-bottom: 2px solid ${palette.nav}
  }

  #nav-container {
    margin-bottom: 50px;
    #main-nav {
      width: 720px;
      margin: auto;
    }

    #left-nav {
      #phil-avery {
        margin-bottom: 10px;
      }

      #below-phil {
        font-size: 12px;
        line-height: 20px;
      }

      font-family: 'Azeret Mono';
      font-size: 17px;
      line-height: 25px;
      float: left;
      border-right: 1px solid ${palette.imageBorder};
      margin: 17px 15px 0 10px;
    }
  }
`

export default (props) => {
  return (
    <Nav>
      <div id="nav-container">
        <div id="left-nav">
          <div id='phil-avery'>Phil Avery</div>
          <div id="below-phil">
            <a href="https://www.linkedin.com/in/phillipavery/">LinkedIn</a>
            <br/><a href="https://github.com/pill">Github</a>
            <br/><a href="https://www.instagram.com/classique_phil/">@classique_phil</a>
            <br/><a href="https://www.instagram.com/pill_moto/">@pill_moto</a>
          </div>
        </div>

        <div id="main-nav">
          { [''].includes(props.section)
              ? <strong>home</strong>
              : <a href="/">home</a> }

          { ['blog', 'tags', 'post'].includes(props.section)
              ? <strong>blog</strong>
              : <a href='/blog'>blog</a> }
        </div>
      </div>
    </Nav>

  )
}