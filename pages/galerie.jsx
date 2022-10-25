import Layout from '../components/layout'
import Header from '../components/header'
import SectionTitle from '../components/section-title'
import Head from 'next/head'
import Image from 'next/image'
import { staticRequest } from 'tinacms'
import { useTina } from 'tinacms/dist/edit-state'
import { GroupTitle, GroupWrapper } from '../pages-styles/galerie.styles'

export default function Gallery({data: initialData, query}) {
  const { data } = useTina({
    query,
    variables: { relativePath: '/gallery.md' },
    data: initialData,
  })

    const {sections} = data.getGalleryDocument.data
  return (
    <>
      <Layout>
        <Head>
          <title>Symfonicky orchestr Prahy 8</title>
        </Head>
        <Header />
        <SectionTitle>Galerie</SectionTitle>
        {sections && <div>
          {sections.map(section => {
            if (section.items) {
                return (
                    <GroupWrapper key={section.name}>
                        <GroupTitle>{section.name}</GroupTitle>
                        {section.items.map(item => <Image src={item.url} width='200px' height='200px' objectFit='cover' alt='Fotografie v galerii' />)}
                    </GroupWrapper>
                ) 
            }
            return null
          })}
        </div>}
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
                    name,
                    items {
                        url
                    }
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