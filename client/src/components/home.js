import React, { useEffect }  from "react"
import styled from 'styled-components'
import palette from './palette'

export default function Home() {

  const HomePage = styled.div`
    #home-container {
      margin-top: 50px;
      width: 560px;
      color: ${palette.text};
      text-align: center;

      img {
        border: 2px solid ${palette.imageBorder};
        width: 560px;
        margin-bottom: 15px;
      }
    }
  `

  return (
    <HomePage>
      <div id="home-container">
        <img src="https://images.ctfassets.net/9itkoq01s77j/2METWxNUggmn6bfqiHhpKu/2215a0bd75ad13cd4eba994008eb8d68/Phil_Avery_on_Instagram_____Yet_another_ramen_place_in_nyc__not_complaining_though___ramen__nyc___.png" />
        <div>
          Just a picture of some yummy ramen I ate once.
        </div>
      </div>
    </HomePage>
  )
}