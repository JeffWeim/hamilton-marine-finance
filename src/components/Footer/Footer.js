import React from 'react'
import styled, { css } from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'

import SvgIcon from '../SvgIcon'

export const query = graphql`
  {
    datoCmsFooterInformation {
      emailInformation {
        email
      }
      locationInformation {
        googleMapsUrl
        locationString
      }
      phoneInformation {
        direct
        office
      }
    }
  }
`

const Footer = () => {
  const render = data => {
    const {
      datoCmsFooterInformation: {
        emailInformation: [{ email }],
        locationInformation: [{ googleMapsUrl, locationString }],
        phoneInformation: [{ direct, office }],
      },
    } = data

    const index = email.search('@') + 1
    const splitString = `${email.substr(0, index)}\n${email.substr(index)}`

    return (
      <Container>
        <Inner>
          <LogoContainer>
            <Svg
              width="458"
              height="168"
              viewBox="0 0 458 168"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="Logo">
                <path
                  id="Fill 1"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M26.8303 77H42.2124L36.6119 96.4624H56.0957L61.618 77H77L62.1697 129H46.7876L52.4674 109.24H32.9835L27.382 129H12L26.8303 77Z"
                  fill="black"
                />
                <path
                  id="Fill 2"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M108.908 108.643L107 93.8165L97.0005 108.643H108.908ZM104.176 77H118.68L127 129H111.428L110.13 119.78H89.5191L83.1074 129H67L104.176 77Z"
                  fill="black"
                />
                <path
                  id="Fill 3"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M147.113 77H162.869L170.344 97.1316L189.477 77H207L191.888 129H176.213L184.814 99.1372L164.637 119.492H164.315L156.036 99.2853L147.435 129H132L147.113 77Z"
                  fill="black"
                />
                <path
                  id="Fill 4"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M215.257 77H231L215.744 129H200L215.257 77Z"
                  fill="black"
                />
                <path
                  id="Fill 5"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M239.04 77H254.64L243.28 116.371H270L266.319 129H224L239.04 77Z"
                  fill="black"
                />
                <path
                  id="Fill 6"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M284.571 89.6284H268L271.63 77H320L316.449 89.6284H299.879L288.674 129H273.287L284.571 89.6284Z"
                  fill="black"
                />
                <g id="Group 38">
                  <path
                    id="Fill 7"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M360.525 99.9467C360.525 93.3746 356.267 88.5017 348.461 88.5017C338.84 88.5017 332.531 97.288 332.531 104.968C332.531 111.539 336.789 116.412 344.596 116.412C354.296 116.412 360.525 107.625 360.525 99.9467ZM316.918 106.075C316.918 90.3471 330.639 75.6548 349.8 75.6548C365.493 75.6548 376.139 85.6968 376.139 98.8391C376.139 114.565 362.418 129.259 343.256 129.259C327.563 129.259 316.918 119.218 316.918 106.075Z"
                    fill="black"
                  />
                  <path
                    id="Fill 9"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M390.016 76.6147H404.288L418.562 105.337L426.841 76.6147H442.061L427.236 128.3H413.83L398.927 98.5433L390.41 128.3H375.19L390.016 76.6147Z"
                    fill="black"
                  />
                  <path
                    id="Fill 11"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.60782 147.061H7.81499L12.3193 157.732L22.9679 147.061H25.5927L19.9853 166.615H17.5991L22.1328 150.776L11.5438 161.251H11.4245L6.86054 150.805L2.32688 166.615H0.000396729L5.60782 147.061Z"
                    fill="black"
                  />
                  <path
                    id="Fill 13"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M52.951 159.464L51.0714 149.435L43.4358 159.464H52.951ZM50.5649 146.921H52.8317L56.7092 166.615H54.2937L53.3383 161.447H41.9445L38.0073 166.615H35.4119L50.5649 146.921Z"
                    fill="black"
                  />
                  <path
                    id="Fill 15"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M82.5457 157.033C85.588 157.033 87.7952 156.14 88.7203 154.714C89.3765 153.905 89.6747 153.011 89.5554 151.977C89.4058 150.19 87.8255 149.1 84.7832 149.1H79.1748L76.8786 157.033H82.5457ZM77.3852 147.061H84.9015C88.8993 147.061 91.345 148.569 91.7333 151.167C92.0012 152.619 91.6726 153.989 90.8082 155.218C89.8234 157.117 87.5566 158.347 84.5142 158.793L88.8093 166.615H86.0955L81.9785 159.017H76.3114L74.1336 166.615H71.7777L77.3852 147.061Z"
                    fill="black"
                  />
                  <path
                    id="Fill 17"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M110.56 147.061H112.915L107.308 166.615H104.952L110.56 147.061Z"
                    fill="black"
                  />
                  <path
                    id="Fill 19"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M130.607 147.061H132.785L141.286 162.928L145.849 147.061H148.146L142.538 166.615H140.659L131.949 150.385L127.295 166.615H124.999L130.607 147.061Z"
                    fill="black"
                  />
                  <path
                    id="Fill 21"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M165.631 147.061H180.574L179.978 149.072H167.391L165.481 155.748H176.727L176.131 157.76H164.915L162.946 164.604H175.683L175.115 166.615H160.023L165.631 147.061Z"
                    fill="black"
                  />
                  <path
                    id="Fill 23"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M217.211 147.061H232.216L231.649 149.1H218.972L216.973 156.084H228.308L227.711 158.095H216.407L213.961 166.615H211.604L217.211 147.061Z"
                    fill="black"
                  />
                  <path
                    id="Fill 25"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M248.625 147.061H250.982L245.374 166.615H243.018L248.625 147.061Z"
                    fill="black"
                  />
                  <path
                    id="Fill 27"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M268.673 147.061H270.851L279.351 162.928L283.915 147.061H286.212L280.604 166.615H278.725L270.015 150.385L265.362 166.615H263.064L268.673 147.061Z"
                    fill="black"
                  />
                  <path
                    id="Fill 29"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M313.54 159.464L311.66 149.435L304.025 159.464H313.54ZM311.154 146.921H313.421L317.298 166.615H314.883L313.928 161.447H302.533L298.596 166.615H296.001L311.154 146.921Z"
                    fill="black"
                  />
                  <path
                    id="Fill 31"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M337.974 147.061H340.152L348.653 162.928L353.217 147.061H355.513L349.906 166.615H348.026L339.317 150.385L334.664 166.615H332.367L337.974 147.061Z"
                    fill="black"
                  />
                  <g id="Group 35">
                    <mask
                      id="mask0"
                      mask-type="alpha"
                      maskUnits="userSpaceOnUse"
                      x="369"
                      y="146"
                      width="21"
                      height="21"
                    >
                      <path
                        id="Clip 34"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M369.031 146.726H389.433V166.978H369.031V146.726Z"
                        fill="white"
                      />
                    </mask>
                  </g>
                  <path
                    id="Fill 36"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M406.5 147.061H421.444L420.847 149.072H408.26L406.352 155.748H417.597L417 157.76H405.784L403.816 164.604H416.552L415.985 166.615H400.893L406.5 147.061Z"
                    fill="black"
                  />
                  <path
                    id="Fill 33"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M369.031 158.877C369.031 152.564 374.638 146.726 381.559 146.726C385.436 146.726 388.032 148.486 389.433 150.916L387.405 152.089C386.123 150.049 384.422 148.765 381.35 148.765C375.921 148.765 371.507 153.626 371.507 158.793C371.507 162.565 374.251 164.911 378.039 164.911C380.843 164.911 382.722 163.878 384.512 162.257L386.093 163.711C384.153 165.526 381.678 166.978 377.92 166.978C372.998 166.978 369.031 163.905 369.031 158.877Z"
                    fill="black"
                  />
                </g>
                <g id="Waves">
                  <path
                    id="Fill 39"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M227.553 0.897705C222.6 0.900555 217.23 1.15516 211.454 1.74796C103.358 10.2942 57.7769 19.8673 42.5075 23.8269C41.7512 24.0226 41.8958 25.3802 42.6687 25.3384C70.456 23.8307 178.19 17.9768 211.454 15.9771C254.496 13.3912 265.968 24.0559 267.511 25.5284C267.626 25.6376 267.768 25.6908 267.915 25.6861C358 22.2794 433.552 24.3542 457.27 25.2073C457.685 25.2225 457.913 24.8377 457.919 24.4511V24.4178C457.914 24.0882 457.748 23.7642 457.4 23.6892C393.535 9.89231 277.207 10.0633 272.249 10.0766C272.142 10.0766 272.045 10.0443 271.949 9.98256C270.49 9.00786 255.698 0.914805 227.709 0.897705H227.553Z"
                    fill="url(#paint0_linear)"
                  />
                  <path
                    id="Fill 42"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M201.373 32.7626C93.2775 41.3088 47.696 50.8839 32.4276 54.8425C31.6703 55.0382 31.8149 56.3948 32.5878 56.353C60.3751 54.8454 168.109 48.9915 201.373 46.9927C244.415 44.4058 255.888 55.0724 257.431 56.544C257.546 56.6532 257.687 56.7074 257.834 56.7007C347.92 53.295 423.471 55.3698 447.189 56.2219C447.97 56.2504 448.087 54.8701 447.319 54.7048C383.455 40.9079 267.126 41.078 262.169 41.0922C262.062 41.0922 261.964 41.0599 261.87 40.9972C260.409 40.0225 245.586 31.9124 217.537 31.9124C212.566 31.9133 207.175 32.1679 201.373 32.7626Z"
                    fill="url(#paint1_linear)"
                  />
                </g>
              </g>
              <defs>
                <linearGradient
                  id="paint0_linear"
                  x1="42.009"
                  y1="25.6863"
                  x2="457.919"
                  y2="25.6863"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#1F2F97" />
                  <stop offset="1" stopColor="#1CA6EB" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear"
                  x1="31.9282"
                  y1="56.7013"
                  x2="447.839"
                  y2="56.7013"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#1F2F97" />
                  <stop offset="1" stopColor="#1CA6EB" />
                </linearGradient>
              </defs>
            </Svg>

            <Small>Financing provided by Diverse Offerings Finance</Small>
          </LogoContainer>

          <Links>
            <a href={`mailto:${email}`}>
              <Link>
                <StyledIcon one type="email" />

                <Small>{splitString}</Small>
              </Link>
            </a>

            <Link>
              <StyledIcon two type="phone" />

              <a href={`tel:${direct.replace(/\./g, '')}`}>
                <Small>Direct: {direct}</Small>
              </a>
              <a href={`tel:${office.replace(/\./g, '')}`}>
                <Small>Office: {office}</Small>
              </a>
            </Link>

            <a href={googleMapsUrl} target="_blank" rel="noreferrer">
              <Link>
                <StyledIcon three type="location" />

                <Small>{locationString}</Small>
              </Link>
            </a>
          </Links>
        </Inner>
      </Container>
    )
  }

  return <StaticQuery query={`${query}`} render={render} />
}

const Container = styled.footer`
  background-color: ${({ theme }) => theme.colors.tan};
`

const Inner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 1060px;
  padding: 50px 30px;
  width: 100%;

  @media screen and (min-width: ${({ theme }) => theme.screen.md}) {
    flex-direction: row;
  }
`

const Links = styled.div`
  display: flex;
  flex-direction: column;

  a {
    color: ${({ theme }) => theme.colors.black};
    text-decoration: none;
  }
`

const Link = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 0 60px;
  padding: 30px 20px;
  position: relative;
  width: 100%;

  @media screen and (min-width: ${({ theme }) => theme.screen.md}) {
    align-items: flex-start;
    max-width: 100%;
    padding: 30px 20px 30px 50px;
    width: 280px;

    + div,
    + a {
      margin: 0 0 30px;
    }
  }
`

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 0 60px;

  @media screen and (min-width: ${({ theme }) => theme.screen.md}) {
    margin: 0 40px 0 0;
  }

  svg {
    margin: 0 0 30px;
  }
`

const Small = styled.p`
  font-family: ${({ theme }) => theme.fonts.OpenSansRegular};
  font-size: 13px;
  line-height: 20px;
  letter-spacing: 0.325px;
  text-align: center;

  @media screen and (min-width: ${({ theme }) => theme.screen.md}) {
    text-align: left;
  }
`

const StyledIcon = styled(SvgIcon)`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);

  @media screen and (min-width: ${({ theme }) => theme.screen.md}) {
    top: 50%;
    transform: translateY(-50%);
  }

  ${({ one }) =>
    one &&
    css`
      top: -10px;

      @media screen and (min-width: ${({ theme }) => theme.screen.md}) {
        left: -35px;
      }
    `}

  ${({ two }) =>
    two &&
    css`
      top: -30px;

      @media screen and (min-width: ${({ theme }) => theme.screen.md}) {
        left: -30px;
      }
    `}

  ${({ three }) =>
    three &&
    css`
      top: -40px;

      @media screen and (min-width: ${({ theme }) => theme.screen.md}) {
        left: -20px;
      }
    `}
`

const Svg = styled.svg`
  max-width: 100%;
`

export default Footer
