import Link from "next/link"
import styled, {createGlobalStyle} from 'styled-components'
import NavigationItem from "../components/navigation-item/navigation-item"
import Navigation from "../components/navigation/navigation"

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter';
  }

  h1 {
    font-family: 'Parisienne', cursive;
    color: white;
  }
`

const SpaceHelper = styled.div`
  flex: 1 1 auto;
`

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Navigation>
        <Link href='/'><h1>Symfonicky Orchestr Prahy 8</h1></Link>
        <SpaceHelper />
        <NavigationItem href='/o-nas'>O nas</NavigationItem>
        <NavigationItem href='/obsazeni'>Obsazeni</NavigationItem>
        <NavigationItem href='/dirigenti'>Dirigenti</NavigationItem>
        <NavigationItem href='/koncerty'>Koncerty</NavigationItem>
        <NavigationItem href='/galerie'>Galerie</NavigationItem>
        <NavigationItem href='/kontakt'>Kontakt</NavigationItem>
      </Navigation>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
