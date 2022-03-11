import {StyledHeader, StyledLogo, StyledNavItem, StyledLinks, StyledMenuBtn} from './header.styles'
import { useRouter } from 'next/router'
import { useState } from 'react'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const {pathname} = useRouter()

  return (
    <StyledHeader open={menuOpen} isHomepage={pathname === '/'}>
      <StyledLogo href="/">Symfonický Orchestr Prahy 8</StyledLogo>
      <StyledLinks open={menuOpen}>
        <StyledNavItem href="/o-nas">O nás</StyledNavItem>
        <StyledNavItem href="/obsazeni">Obsazení</StyledNavItem>
        <StyledNavItem href="/dirigenti">Dirigenti</StyledNavItem>
        <StyledNavItem href="/koncerty">Koncerty</StyledNavItem>
        <StyledNavItem href="/galerie">Galerie</StyledNavItem>
        <StyledNavItem href="/kontakt">Kontakt</StyledNavItem>
      </StyledLinks>
      <StyledMenuBtn open={menuOpen} onClick={() => setMenuOpen(!menuOpen)} isHomepage={pathname === '/'} />
    </StyledHeader>
  )
}
