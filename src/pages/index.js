import React from 'react'

import {
  Contact,
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
      <Contact />
    </>
  )
}

export default IndexPage
