import Layout from '../components/layout'
import Header from '../components/header'
import Head from 'next/head'
import { staticRequest } from 'tinacms'
import { useTina } from 'tinacms/dist/edit-state'

export default function Structure({data: initialData, query}) {
  const { data } = useTina({
    query,
    variables: { relativePath: '/structure.md' },
    data: initialData,
  })

  const {first_violins} = data.getStructureDocument.data
  return (
    <>
      <Layout>
        <Head>
          <title>Symfonicky orchestr Prahy 8</title>
        </Head>
        <Header />
        <div>
          {first_violins.map(({player}) => <div key={player}>{player}</div>)}
        </div>
      </Layout>
    </>
  )
}

export const getStaticProps = async () => {
  const variables = { relativePath: '/structure.md' }
  const query = `
    query StructureQuery($relativePath: String!) {
      getStructureDocument(relativePath: $relativePath) {
        data {
          first_violins {
            player
          }
          second_violins {
            player
          }
          viols {
            player
          }
          violoncellos {
            player
          }
          basses {
            player
          }
          flutes {
            player
          }
          oboes {
            player
          }
          clarinets {
            player
          }
          bassoons {
            player
          }
          french_horns {
            player
          }
          trumpets {
            player
          }
          trombones {
            player
          }
          tube {
            player
          }
          drums {
            player
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