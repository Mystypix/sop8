import TinaProvider from '../.tina/components/TinaDynamicProvider.js'
import '../styles/index.css'

const App = ({ Component, pageProps }) => {
  return (
    <>
      <TinaProvider>
        <Component {...pageProps} />
      </TinaProvider>
    </>
  )
}

export default App
