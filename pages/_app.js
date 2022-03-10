import dynamic from 'next/dynamic'
import { TinaEditProvider } from 'tinacms/dist/edit-state'
const TinaCMS = dynamic(() => import('tinacms'), { ssr: false })
import { defineConfig } from "tinacms";
import '../styles/index.css'

const branch = process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF
const apiURL = process.env.NODE_ENV == 'development'
  ? 'http://localhost:4001/graphql'
  : `https://content.tinajs.io/content/${process.env.NEXT_PUBLIC_TINA_CLIENT_ID}/github/${branch}`

const tinaConfig = defineConfig({
  apiURL,
  mediaStore: async () => {
  // Load media store dynamically so it only loads in edit mode
    const pack = await import("next-tinacms-cloudinary")
    console.log('yes', pack)
    return pack.TinaCloudCloudinaryMediaStore
  },
  cmsCallback: (cms) => {
    cms.flags.set('tina-admin', true)
    return cms
  }
})

const App = ({ Component, pageProps }) => {
  return (
    <>
      <TinaEditProvider
        editMode={
          <TinaCMS
            {...tinaConfig}
          >
            <Component {...pageProps} />
          </TinaCMS>
        }
      >
        <Component {...pageProps} />
      </TinaEditProvider>
    </>
  )
}

export default App
