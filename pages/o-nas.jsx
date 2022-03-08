import Layout from '../components/layout'
import Header from '../components/header'
import Head from 'next/head'
import { staticRequest } from 'tinacms'
import { useTina } from 'tinacms/dist/edit-state'

export default function About({data: initialData, query}) {
  const { data } = useTina({
    query,
    variables: { relativePath: '/about.md' },
    data: initialData,
  })

  const {description} = data.getAboutDocument.data
  console.log('dsfkljdsf', description)
  return (
    <>
      <Layout>
        <Head>
          <title>Symfonicky orchestr Prahy 8 - O nas</title>
        </Head>
        <Header />
        <div>
            {/* {description} */}
          {/* {conductors.map((conductor) => {
            return (
              <div key={conductor.name}>
                <h3>{conductor.name}</h3>
                <p>{conductor.text}</p>
              </div>
            )
          })} */}
        </div>
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