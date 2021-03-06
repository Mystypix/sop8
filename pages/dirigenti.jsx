import Layout from '../components/layout'
import Header from '../components/header'
import Conductor from '../components/conductor'
import SectionTitle from '../components/section-title'
import Head from 'next/head'
import { staticRequest } from 'tinacms'
import { useTina } from 'tinacms/dist/edit-state'

export default function Conductors({data: initialData, query}) {
  const { data } = useTina({
    query,
    variables: { relativePath: '/conductors.md' },
    data: initialData,
  })

  const {conductors} = data.getConductorsDocument.data
  return (
    <>
      <Layout>
        <Head>
          <title>Symfonicky orchestr Prahy 8</title>
        </Head>
        <Header />
        <SectionTitle>Dirigenti</SectionTitle>
        <div>
          {conductors.map((props) => {
            return (
              <Conductor key={props.name} {...props} />
            )
          })}
        </div>
      </Layout>
    </>
  )
}

export const getStaticProps = async () => {
  const variables = { relativePath: '/conductors.md' }
  const query = `
    query ConductorQuery($relativePath: String!) {
      getConductorsDocument(relativePath: $relativePath) {
        data {
          conductors {
            photo
            name
            text
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