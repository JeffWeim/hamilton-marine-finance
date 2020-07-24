import React from 'react'

import {
  FullImageWithText,
  Hero,
  IconWithText,
  ImageGridWithQuote,
  ImageTextStaggered,
  Testimonials,
} from 'Components'

const IndexPage = () => {
  return (
    <>
      <Hero />
      <IconWithText />
      <ImageTextStaggered />
      <FullImageWithText />
      <ImageGridWithQuote />
      <Testimonials />
    </>
  )
}

export default IndexPage
