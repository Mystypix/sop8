import Link from 'next/link'
import Layout from '../../components/layout'
import Header from '../../components/header'
import SectionTitle from '../../components/section-title'
import Head from 'next/head'
import { staticRequest } from 'tinacms'
import { useTina } from 'tinacms/dist/edit-state'

const query = `
  query {
    getConcertList {
      edges {
        node {
          values
          sys {
            filename
          }
        }
      }
    }
  }
`

export default function Concerts({data: initialData}) {
  const { data: rawData } = useTina({
    query,
    data: initialData,
  })

  const concerts = rawData.getConcertList.edges.reduce((acc, concert) => {
    acc.push({...concert.node.values, slug: concert.node.sys.filename})
    return acc
  }, [])
    .sort((a, b) => new Date(a.date) + new Date(b.date))

  return (
    <>
      <Layout>
        <Head>
          <title>Symfonicky orchestr Prahy 8</title>
        </Head>
        <Header />
        <SectionTitle>Koncerty</SectionTitle>
        <div>
          {concerts.map(({name, time, price, address, conductor, solist, date, slug}) => {
            return (
              <Link href={`/koncerty/${slug}`} key={slug}>
                <div>
                  {name && <div>{name}</div>}
                  {time && <div>{time}</div>}
                  {price && (new Date(date) >= new Date()) && <div>{price}</div>}
                  {address && <div>{address}</div>}
                  {conductor && <div>{conductor}</div>}
                  {solist && <div>{solist}</div>}
                </div>
              </Link>
            )
          })}
        </div>
      </Layout>
    </>
  )
}

export const getStaticProps = async () => {
  const data = await staticRequest({query})

  return {
    props: {
      query,
      data,
    },
  }
}