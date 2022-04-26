import Layout from '../components/layout'
import Header from '../components/header'
import SectionTitle from '../components/section-title'
import Head from 'next/head'
import { staticRequest } from 'tinacms'
import { useTina } from 'tinacms/dist/edit-state'

export default function Gallery({data: initialData, query}) {
  const { data } = useTina({
    query,
    variables: { relativePath: '/gallery.md' },
    data: initialData,
  })

    // const {sections} = data.getGalleryDocument.data
  return (
    <>
      <Layout>
        <Head>
          <title>Symfonicky orchestr Prahy 8</title>
        </Head>
        <Header />
        <SectionTitle>Galerie</SectionTitle>
        {/* <div>
          {sections.map((props) => {
            return (
                <div>{props.url}</div>
            )
          })}
        </div> */}
      </Layout>
    </>
  )
}

export const getStaticProps = async () => {
  const variables = { relativePath: '/gallery.md' }
  const query = `
    query GalleryQuery($relativePath: String!) {
        getGalleryDocument(relativePath: $relativePath) {
            data {
                sections {
                    name
                }
            }
        }
    }
  `
  const data = await staticRequest({
    query: query,
    variables: variables,
  })

  return {
    props: {
      query,
      variables,
      data,
    },
  }
}