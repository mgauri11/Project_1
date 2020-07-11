import React, { Component } from 'react'

import FluidGallery from 'react-fluid-gallery'

import image1 from './1.jpg'
import image2 from './2.jpg'
import video from './video.mp4'

export default class App extends Component {
  render () {
    return (
      <FluidGallery
        style={{ width: '100vw', height: '100vh' }}
        slides={[ image1, image2, video ]}
      />
    )
  }
}