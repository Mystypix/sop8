import Link from 'next/link'
import styled from 'styled-components'

export const StyledHeader = styled.nav`
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 20px;
    padding: 0 30px;
    width: 100vw;
    height: 60px;
`

const StyledLogoAnchor = styled.a`
    color: #fff;
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
    color: #fff;
    font-size: 20px;
`

export const StyledNavItem = ({ href, children }) => (
  <Link href={href} passHref>
    <StyledItemAnchor>{children}</StyledItemAnchor>
  </Link>
)
