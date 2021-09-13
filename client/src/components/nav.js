import React, { Component } from 'react'

import palette from './palette'
import styled from 'styled-components'

const Nav = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Teko&display=swap');
  @import url('https://fonts.googleapis.com/css?family=Azeret+Mono&display=swap');
  font-family: 'Teko', sans-serif;

  font-size: 35px;
  color: ${palette.nav};

  #nav-container {
    a, strong {
      margin-right: 20px;
    }

    a {
      text-decoration: none;
    }

    .selected {
      color: ${palette.nav};
      border-bottom: 2px solid ${palette.nav}
    }

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
              <a class={ [''].includes(props.section) ? 'selected' : ''}
                 href="/">home</a>
              <a class={['blog', 'tags', 'post'].includes(props.section) ? 'selected' : ''}
                 href='/blog'>blog</a>
        </div>
      </div>
    </Nav>

  )
}