import React from 'react'

import {
  Contact,
  Cta,
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
      <Cta />
    </>
  )
}

export default IndexPage
