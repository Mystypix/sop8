import Layout from '../../components/layout'
import Header from '../../components/header'
import SectionTitle from '../../components/section-title'
import Head from 'next/head'
import { staticRequest } from 'tinacms'
import { useTina } from 'tinacms/dist/edit-state'

export default function Concerts({data: initialData, query}) {
  const { data } = useTina({
    query,
    variables: { relativePath: '/concerts.md' },
    data: initialData,
  })

  console.log('cococo', data)

  const {concerts} = data.getConcertsDocument.data
  return (
    <>
      <Layout>
        <Head>
          <title>Symfonicky orchestr Prahy 8</title>
        </Head>
        <Header />
        <SectionTitle>Koncerty</SectionTitle>
        <div>
          {concerts.map((concert) => {
            return (
              <div key={concert.name}>
                <div>{concert.name}</div>
                <div>{concert.time}</div>
                <div>{concert.price}</div>
                <div>{concert.address}</div>
                <div>{concert.conductor}</div>
                <div>{concert.solists}</div>
              </div>
            )
          })}
        </div>
      </Layout>
    </>
  )
}

export const getStaticProps = async () => {
  const variables = { relativePath: '/concerts.md' }
  const query = `
    query ConcertsQuery($relativePath: String!) {
      getConcertsDocument(relativePath: $relativePath) {
        data {
          concerts {
            name
            date
            time
            address
            conductor
            solists
            price
            description
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