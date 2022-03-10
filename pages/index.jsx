import Layout from '../components/layout'
import Head from 'next/head'
import Image from 'next/image'
import { staticRequest } from 'tinacms'
import { useTina } from 'tinacms/dist/edit-state'
import {StyledIntro, StyledConcertsSection, StyledIntroText} from '../pages-styles/index.styles'
import ConcertCard from '../components/concert-card'
import SectionTitle from '../components/section-title'

export default function Index({data: initialData, query}) {
  const { data } = useTina({
    query,
    variables: { 
      homeRelativePath: '/home.md',
      concertsRelativePath: '/concerts.md',
     },
    data: initialData,
  })
  const {title} = data.getHomeDocument.data
  const {concerts} = data.getConcertsDocument.data

  return (
    <>
      <Layout>
        <Head>
          <title>Symfonicky orchestr Prahy 8</title>
        </Head>
        <StyledIntro>
          <Image priority src='/assets/images/intro.jpg' layout='fill' objectFit='cover' />
          <StyledIntroText>{title}</StyledIntroText>
        </StyledIntro>
        <StyledConcertsSection>
          <SectionTitle>
            Příští koncert
          </SectionTitle>
          <ConcertCard {...concerts[0]} />
        </StyledConcertsSection>
      </Layout>
    </>
  )
}

export const getStaticProps = async () => {
  const variables = { 
    homeRelativePath: '/home.md',
    concertsRelativePath: '/concerts.md',
  }
  const query = `
    query HomeQuery($homeRelativePath: String!, $concertsRelativePath: String!) {
      getHomeDocument(relativePath: $homeRelativePath) {
        data {
          title
        }
      }
      getConcertsDocument(relativePath: $concertsRelativePath) {
        data {
          concerts {
            name
            date
            time
            address
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