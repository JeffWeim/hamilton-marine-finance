import React from 'react'
import styled from 'styled-components'

const Component = () => (
  <Frame id="frame">
    <div id="wave" />
    <div id="boat" />
  </Frame>
)

const Frame = styled.div`
  position: relative;
  height: 15em;
  width: 15em;
  background-color: lightblue;
  border: 0.75em solid #fff;
  border-radius: 50%;
  margin: 2em 0;
  overflow: hidden;
  z-index: 2;

  &:after {
    content: '';
    height: 5em;
    width: 5em;
    background-color: rgba(255, 255, 0, 0.77);
    display: block;
    margin-top: -2em;
    border-radius: 50%;
    margin-left: 50%;
    box-shadow: -4px 5px 31px rgba(255, 255, 0, 1);
  }

  #wave {
    background: radial-gradient(#3b3b92 38%, #1269e6 100%);
    height: 23em;
    width: 23em;
    position: absolute;
    border-radius: 8.15em;
    bottom: -19em;
    left: -5em;
    transform: rotate(360deg);
    animation: wave 5s linear infinite;
  }

  #boat {
    width: 7.5em;
    height: 2.125em;
    background: linear-gradient(18deg, #457b96 29%, #62a6e4 100%);
    position: absolute;
    top: 8.5em;
    margin-left: 3.75em;
    margin-top: 0.25em;
    left: -1em;
    border-radius: 45%;
    border-top-left-radius: 0.5em;
    border-top-right-radius: 0.5em;
    transform: rotate(-4deg);
    animation: rockTheBoat 1.25s linear infinite;
    z-index: 2;
    border-bottom: 3px outset #6776bb;

    &:before {
      content: '';
      display: block;
      width: 0;
      height: 0;
      border-left: 2em solid transparent;
      border-right: -0.25em solid transparent;
      border-bottom: 4em solid #eaeaea;
      position: absolute;
      top: -4em;
      left: 1.75em;
      z-index: 1;
      transform: rotateY(500px);
    }

    &:after {
      content: '';
      display: block;
      width: 0;
      height: 0;
      border-right: 2em solid transparent;
      border-left: -0.25em solid transparent;
      border-bottom: 4em solid #f5f0f0;
      position: absolute;
      top: -4em;
      left: 3.875em;
      z-index: 1;
    }
  }

  @keyframes wave {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes rockTheBoat {
    0% {
      margin-top: 0.25em;
      transform: rotate(-4deg);
    }
    40% {
      transform: rotate(6deg);
      margin-top: -0.5em;
    }
    65% {
      transform: rotate(-8deg);
      margin-top: -0.125em;
    }
    100% {
      transform: rotate(-4deg);
      margin-top: 0.25em;
    }
  }
`

export default Component
