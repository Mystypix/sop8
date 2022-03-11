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
  color: ${props => props.isHomepage && !props.open ? '#fff' : 'var(--color-text)'};    
  box-shadow: ${props => props.isHomepage ? 'unset' : '0 1px 10px 0 rgba(0,0,0,.1)'};

  @media screen and (max-width: 1140px) {
    padding: 0 20px;
  }
`

const StyledLogoAnchor = styled.a`
  color: inherit;
  font-size: 30px;
  font-family: 'Fondamento', cursive;

  @media screen and (max-width: 1140px) {
    width: 200px;
    font-size: 20px;
  }
`

export const StyledLogo = ({ href, children }) => (
  <Link href={href} passHref>
    <StyledLogoAnchor>{children}</StyledLogoAnchor>
  </Link>
)

export const StyledLinks = styled.div`
  @media screen and (max-width: 1140px) {
    position: fixed;
    top: 0;
    left: 0;
    display: ${props => props.open ? 'flex' : 'none'};
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    background: #fff;
  }
`

const StyledItemAnchor = styled.a`
  margin: 0 10px;
  padding: 0 5px;
  color: ${props => props.active ? "var(--color-primary)" : "inherit"};
  font-size: 20px;

  @media screen and (max-width: 1140px) {
    margin: 15px 0;
  }
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
      }
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

export const StyledMenuBtn = styled.div`
  position: relative;
  border-radius: 10px;
  width: 30px;
  height: 3px;
  background: ${props => props.isHomepage ? '#fff' : 'var(--color-text)'};
  transform: rotate(${props => props.open ? '45deg' : '0deg'});
  transition: transform .2s;

  &::before,
  &::after {
    content: '';
    position: absolute;
    left: 0;
    border-radius: 10px;
    width: 100%;
    height: 3px;
    background: ${props => props.isHomepage && !props.open ? '#fff' : 'var(--color-text)'};
    transition: transform .2s;
  }

  &::before {
    top: -9px;
    transform: translate(${props => props.open ? '0, 9px' : '0, 0'});
  }

  &::after {
    bottom: -9px;
    transform: translate(${props => props.open ? '0, -9px' : '0, 0'}) rotate(${props => props.open ? '-90deg' : '0deg'});
  }
`