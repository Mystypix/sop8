import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { Children, useState, useEffect } from 'react'
import styled from 'styled-components'

export const StyledHeader = styled.nav`
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: ${props => props.isHomepage ? '20px' : '0'};
    padding: 0 30px;
    width: 100vw;
    height: 80px;
    background-color: ${props => props.isHomepage ? 'unset' : '#fff'};
    color: ${props => props.isHomepage ? '#fff' : 'var(--color-text)'};    
    box-shadow: ${props => props.isHomepage ? 'unset' : '0 1px 10px 0 rgba(0,0,0,.1)'};    
`

const StyledLogoAnchor = styled.a`
    color: inherit;
    font-size: 30px;
    font-family: 'Fondamento', cursive;
`

export const StyledLogo = ({ href, children }) => (
  <Link href={href} passHref>
    <StyledLogoAnchor>{children}</StyledLogoAnchor>
  </Link>
)

const StyledItemAnchor = styled.a`
    margin: 0 10px;
    padding: 0 5px;
    color: ${props => props.active ? "var(--color-primary)" : "inherit"};
    font-size: 20px;
`

export const StyledNavItem = ({ href, children }) => (
  <ActiveLink href={href} passHref>
    <StyledItemAnchor>{children}</StyledItemAnchor>
  </ActiveLink>
)

const ActiveLink = ({ children, ...props }) => {
  const { asPath, isReady } = useRouter()

  const child = Children.only(children)
  const [active, setActive] = useState(false)

  useEffect(() => {
    // Check if the router fields are updated client-side
    if (isReady) {
      // Dynamic route will be matched via props.as
      // Static route will be matched via props.href
      const linkPathname = new URL(props.as || props.href, location.href)
        .pathname

      // Using URL().pathname to get rid of query and hash
      const activePathname = new URL(asPath, location.href).pathname

      if (linkPathname === activePathname) {
        setActive(true)
        console.log('yeeee')
      }

      // const newClassName =
      //   linkPathname === activePathname
      //     ? `${childClassName} ${activeClassName}`.trim()
      //     : childClassName

      // if (newClassName !== className) {
      //   setClassName(newClassName)
      // }
    }
  }, [
    asPath,
    isReady,
    props.as,
    props.href,
  ])

  return (
    <Link {...props}>
      {React.cloneElement(child, {active})}
    </Link>
  )
}