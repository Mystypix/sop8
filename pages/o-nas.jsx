import Layout from '../components/layout'
import Header from '../components/header'
import SectionTitle from '../components/section-title'
import {StyledWrapper} from '../pages-styles/o-nas.styles'
import Head from 'next/head'
import { staticRequest } from 'tinacms'
import { TinaMarkdown } from 'tinacms/dist/rich-text'
import { useTina } from 'tinacms/dist/edit-state'

export default function About({data: initialData, query}) {
  const { data } = useTina({
    query,
    variables: { relativePath: '/about.md' },
    data: initialData,
  })

  return (
    <>
      <Layout>
        <Head>
          <title>Symfonicky orchestr Prahy 8 - O nás</title>
        </Head>
        <Header />
        <SectionTitle>O nás</SectionTitle>
        <StyledWrapper>
          <TinaMarkdown
            content={data.getAboutDocument.data.description}
          />
        </StyledWrapper>
      </Layout>
    </>
  )
}

export const getStaticProps = async () => {
  const variables = { relativePath: '/about.md' }
  const query = `
    query AboutQuery($relativePath: String!) {
      getAboutDocument(relativePath: $relativePath) {
        data {
          description
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