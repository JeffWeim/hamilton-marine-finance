import React from 'react'

import {
  Contact,
  Cta,
  FullImageWithText,
  Hero,
  IconWithText,
  ImageGridWithQuote,
  Services,
  Testimonials,
} from 'Components'

const IndexPage = () => {
  return (
    <>
      <Hero />
      <IconWithText />
      <Services />
      <FullImageWithText />
      <ImageGridWithQuote />
      <Testimonials />
      <Contact />
      <Cta />
    </>
  )
}

export default IndexPage
