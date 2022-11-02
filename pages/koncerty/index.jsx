import Link from 'next/link'
import Layout from '../../components/layout'
import Header from '../../components/header'
import SectionTitle from '../../components/section-title'
import Head from 'next/head'
import { staticRequest } from 'tinacms'
import { useTina } from 'tinacms/dist/edit-state'
import ConcertCard from '../../components/concert-card/concers-card'
import { concertListQuery } from '../../components/constants/queries'

export default function Concerts({data: initialData}) {
  const { data: rawData } = useTina({
    query: concertListQuery,
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
          {concerts.map(({slug, ...other}) => <Link href={`/koncerty/${slug}`} key={slug}><ConcertCard {...other} /></Link>)}
        </div>
      </Layout>
    </>
  )
}

export const getStaticProps = async () => {
  const data = await staticRequest({query: concertListQuery})

  return {
    props: {
      query: concertListQuery,
      data,
    },
  }
}