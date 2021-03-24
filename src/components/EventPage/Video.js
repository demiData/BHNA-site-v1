import React from "react"
import styled from "styled-components"

const DIV = styled.div`
    max-width: 100%;
`

const Video = ({ ...props }) => (
    <DIV className="video">
      <iframe
        src="https://player.vimeo.com/video/528545405?title=0&byline=0&portrait=0&speed=0&badge=0&autopause=0&player_id=0&app_id=58479"
        title="A Look at the Bungalow Heaven Home Tour"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        width="100%"
        height="340"
        frameborder="0" allow="autoplay; fullscreen; picture-in-picture"
        webkitallowfullscreen="true"
        mozallowfullscreen="true"
        allowFullScreen
      />
    </DIV>
  )
  export default Video