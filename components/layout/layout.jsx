import Meta from '../meta'
import Header from '../header'
import { StyledContainer } from './layout.styled'

export default function Layout({children }) {
  return (
    <>
      <Meta />
      <Header />
      <StyledContainer>{children}</StyledContainer>
    </>
  )
}
