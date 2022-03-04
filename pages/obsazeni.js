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

  const {groups} = data.getStructureDocument.data
  return (
    <>
      <Layout>
        <Head>
          <title>Symfonicky orchestr Prahy 8</title>
        </Head>
        <Header />
        <div>
          {groups.map((group) => {
            return (
              <div key={group.groupName}>
                <h3>{group.groupName}</h3>
                <div>
                  {group.players.map(playerName => {
                    return <div key={playerName}>{playerName}</div>
                  })}
                </div>
              </div>
            )
          })}
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
          groups {
            groupName
            players
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