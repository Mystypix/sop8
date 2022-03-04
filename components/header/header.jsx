import {StyledHeader, StyledLogo, StyledNavItem} from './header.styles'

export default function Header() {
  return (
    <StyledHeader>
      <StyledLogo href="/">Symfonický Orchestr Prahy 8</StyledLogo>
      <div>
        <StyledNavItem href="/o-nas">O nás</StyledNavItem>
        <StyledNavItem href="/obsazeni">Obsazení</StyledNavItem>
        <StyledNavItem href="/dirigenti">Dirigenti</StyledNavItem>
        <StyledNavItem href="/koncerty">Koncerty</StyledNavItem>
        <StyledNavItem href="/galerie">Galerie</StyledNavItem>
        <StyledNavItem href="/kontakt">Kontakt</StyledNavItem>
      </div>
    </StyledHeader>
  )
}
