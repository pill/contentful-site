import React, { Component } from 'react'

export default (props) => {
  return (
    <div id="nav">
      { ['blog'].includes(props.section)
          ? <strong>blog</strong>
          : <a href='/blog'>blog</a>
      }
      &nbsp;
      { ['work'].includes(props.section)
          ? <strong>work</strong>
          : <a href='/work'>work</a>
      }
    </div>
  )
}