import React from 'react'
// import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Button } from 'Components'

const Header = () => {
  const links = [
    {
      text: 'Need To Know',
      url: '',
    },
    {
      text: 'Other Services',
      url: '',
    },
    {
      text: 'About',
      url: '',
    },
    {
      text: 'Contact',
      url: '',
    },
  ]

  return (
    <header>
      <Inner>
        <svg
          width="161"
          height="60"
          viewBox="0 0 161 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.24765 27H14.6905L12.7088 33.737H19.6031L21.5571 27H27L21.7524 45H16.3095L18.3192 38.1598H11.4249L9.44288 45H4L9.24765 27Z"
            fill="black"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M38.3664 37.9532L37.6667 32.8211L34.0002 37.9532H38.3664ZM36.6312 27H41.9493L45 45H39.2901L38.8142 41.8084H31.257L28.906 45H23L36.6312 27Z"
            fill="black"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M51.2391 27H56.7011L59.2927 33.9686L65.9252 27H72L66.7612 45H61.3272L64.3089 34.6629L57.3142 41.7087H57.2026L54.3325 34.7141L51.3507 45H46L51.2391 27Z"
            fill="black"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M74.9216 27H80L75.0787 45H70L74.9216 27Z"
            fill="black"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M83.2313 27H88.6572L84.7061 40.6284H94L92.7198 45H78L83.2313 27Z"
            fill="black"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M100.736 31.3714H95L96.2567 27H113L111.771 31.3714H106.035L102.156 45H96.8301L100.736 31.3714Z"
            fill="black"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M126.957 35.0212C126.957 32.6446 125.458 30.8825 122.709 30.8825C119.321 30.8825 117.099 34.0598 117.099 36.8369C117.099 39.2131 118.598 40.9752 121.348 40.9752C124.763 40.9752 126.957 37.7979 126.957 35.0212M111.601 37.2374C111.601 31.5498 116.433 26.2368 123.18 26.2368C128.706 26.2368 132.455 29.8682 132.455 34.6207C132.455 40.3076 127.623 45.6209 120.876 45.6209C115.35 45.6209 111.601 41.9899 111.601 37.2374"
            fill="black"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M137.342 26.5839H142.368L147.394 36.9704L150.31 26.5839H155.669L150.449 45.274H145.728L140.48 34.5136L137.481 45.274H132.121L137.342 26.5839Z"
            fill="black"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1.97487 52.0583H2.75211L4.33828 55.9173L8.08814 52.0583H9.01243L7.03781 59.1296H6.19754L7.79405 53.4021L4.0652 57.1899H4.02318L2.41601 53.4122L0.819502 59.1296H0.000244141L1.97487 52.0583Z"
            fill="black"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M18.6465 56.5436L17.9846 52.9171L15.2958 56.5436H18.6465ZM17.8062 52.0079H18.6045L19.9699 59.1296H19.1193L18.7829 57.2607H14.7706L13.3842 59.1296H12.4702L17.8062 52.0079Z"
            fill="black"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M29.068 55.6646C30.1393 55.6646 30.9166 55.3414 31.2423 54.8261C31.4734 54.5334 31.5785 54.2102 31.5364 53.8363C31.4838 53.19 30.9272 52.7958 29.8559 52.7958H27.8809L27.0724 55.6646H29.068ZM27.2507 52.0584H29.8976C31.3054 52.0584 32.1666 52.6039 32.3034 53.5433C32.3977 54.0684 32.282 54.5638 31.9776 55.0081C31.6308 55.6951 30.8325 56.1397 29.7612 56.3011L31.2737 59.1297H30.3181L28.8683 56.382H26.8726L26.1057 59.1297H25.2761L27.2507 52.0584Z"
            fill="black"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M38.9329 52.0583H39.7625L37.7878 59.1296H36.9583L38.9329 52.0583Z"
            fill="black"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M45.9924 52.0583H46.7594L49.753 57.7963L51.3598 52.0583H52.1687L50.1941 59.1296H49.5322L46.4653 53.2606L44.8264 59.1296H44.0178L45.9924 52.0583Z"
            fill="black"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M58.3259 52.0583H63.5883L63.3782 52.7859H58.9458L58.2733 55.1999H62.2335L62.0235 55.9274H58.0739L57.3806 58.4024H61.8657L61.666 59.1296H56.3513L58.3259 52.0583Z"
            fill="black"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M76.4898 52.0583H81.7734L81.5737 52.7957H77.1096L76.4057 55.3214H80.3973L80.1873 56.0486H76.2063L75.3451 59.1296H74.5151L76.4898 52.0583Z"
            fill="black"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M87.552 52.0583H88.3819L86.407 59.1296H85.5774L87.552 52.0583Z"
            fill="black"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M94.6117 52.0583H95.3786L98.3719 57.7963L99.979 52.0583H100.788L98.8134 59.1296H98.1515L95.0845 53.2606L93.4456 59.1296H92.6367L94.6117 52.0583Z"
            fill="black"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M110.411 56.5436L109.75 52.9171L107.061 56.5436H110.411ZM109.571 52.0079H110.369L111.735 59.1296H110.884L110.548 57.2607H106.536L105.149 59.1296H104.235L109.571 52.0079Z"
            fill="black"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M119.016 52.0583H119.783L122.776 57.7963L124.383 52.0583H125.192L123.217 59.1296H122.555L119.488 53.2606L117.85 59.1296H117.041L119.016 52.0583Z"
            fill="black"
          />
          <mask
            id="mask0"
            mask-type="alpha"
            maskUnits="userSpaceOnUse"
            x="129"
            y="51"
            width="9"
            height="9"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M129.952 51.9372H137.137V59.2609H129.952V51.9372Z"
              fill="white"
            />
          </mask>
          <g mask="url(#mask0)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M129.952 56.3315C129.952 54.0484 131.927 51.9372 134.364 51.9372C135.729 51.9372 136.643 52.5737 137.137 53.4525L136.423 53.8768C135.971 53.1392 135.372 52.6746 134.29 52.6746C132.379 52.6746 130.824 54.4325 130.824 56.301C130.824 57.6651 131.79 58.5134 133.124 58.5134C134.112 58.5134 134.773 58.1398 135.404 57.5537L135.96 58.0793C135.277 58.7357 134.406 59.2609 133.082 59.2609C131.349 59.2609 129.952 58.1496 129.952 56.3315"
              fill="black"
            />
          </g>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M143.147 52.0583H148.409L148.199 52.7859H143.767L143.094 55.1999H147.054L146.844 55.9274H142.895L142.201 58.4024H146.687L146.487 59.1296H141.172L143.147 52.0583Z"
            fill="black"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M80.0468 0.315002C78.3069 0.316002 76.4204 0.405336 74.3914 0.613336V0.613336C36.4188 3.612 20.4065 6.971 15.0426 8.36034V8.36034C14.7769 8.429 14.8277 8.90534 15.0992 8.89067V8.89067C24.8605 8.36167 62.7062 6.30767 74.3914 5.606V5.606C89.5116 4.69867 93.5416 8.44067 94.0836 8.95734V8.95734C94.1241 8.99567 94.1739 9.01434 94.2254 9.01267V9.01267C125.871 7.81734 152.412 8.54534 160.744 8.84467V8.84467C160.89 8.85 160.97 8.715 160.972 8.57934V8.57934V8.56767C160.97 8.452 160.912 8.33834 160.789 8.312V8.312C138.354 3.471 97.4897 3.531 95.7481 3.53567V3.53567C95.7103 3.53567 95.6763 3.52434 95.6427 3.50267V3.50267C95.1302 3.16067 89.9338 0.321002 80.1017 0.315002V0.315002H80.0468Z"
            fill="url(#paint0_linear)"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M70.8501 11.4957C32.8774 14.4943 16.8652 17.854 11.5016 19.243V19.243C11.2356 19.3117 11.2864 19.7877 11.5579 19.773V19.773C21.3192 19.244 59.1649 17.19 70.8501 16.4887V16.4887C85.9702 15.581 90.0007 19.3237 90.5427 19.84V19.84C90.5832 19.8783 90.6326 19.8973 90.6841 19.895V19.895C122.33 18.7 148.87 19.428 157.202 19.727V19.727C157.477 19.737 157.518 19.2527 157.248 19.1947V19.1947C134.813 14.3537 93.9484 14.4133 92.2071 14.4183V14.4183C92.1693 14.4183 92.135 14.407 92.102 14.385V14.385C91.5889 14.043 86.3814 11.1973 76.5285 11.1973V11.1973C74.782 11.1977 72.8883 11.287 70.8501 11.4957"
            fill="url(#paint1_linear)"
          />
          <defs>
            <linearGradient
              id="paint0_linear"
              x1="14.8674"
              y1="9.01277"
              x2="160.972"
              y2="9.01277"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#1F2F97" />
              <stop offset="1" stopColor="#1CA6EB" />
            </linearGradient>
            <linearGradient
              id="paint1_linear"
              x1="11.3262"
              y1="19.8952"
              x2="157.431"
              y2="19.8952"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#1F2F97" />
              <stop offset="1" stopColor="#1CA6EB" />
            </linearGradient>
          </defs>
        </svg>

        <Links>
          {links.map(link => (
            <LinkItem key={link.text}>
              <Link href={link.url}>{link.text}</Link>
            </LinkItem>
          ))}

          <LinkItem>
            <Button href="">Apply Online</Button>
          </LinkItem>
        </Links>
      </Inner>
    </header>
  )
}

const Inner = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 1200px;
  padding: 30px 0;
  width: 100%;
`

const Link = styled.a`
  color: ${({ theme }) => theme.colors.blue};
  font-family: ${({ theme }) => theme.fonts.OpenSansSemiboldItalic};
  text-decoration: none;
  text-transform: uppercase;
`

const LinkItem = styled.li`
  margin: 0 10px 0 0;

  &:last-child {
    margin-right: 0;
  }
`

const Links = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  list-style-type: none;
  margin: 0;
  padding: 0;
  width: 80%;
`

Header.propTypes = {}

export default Header
