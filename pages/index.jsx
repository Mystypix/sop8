import Layout from '../components/layout'
import Head from 'next/head'
import Image from 'next/image'
import { staticRequest } from 'tinacms'
import { useTina } from 'tinacms/dist/edit-state'
import {StyledIntro, StyledConcertsSection, StyledIntroText} from '../pages-styles/index.styles'
import ConcertCard from '../components/concert-card'
import SectionTitle from '../components/section-title'
import { concertListQuery } from '../components/constants/queries'

export default function Index({data: initialData, query}) {
  const { data } = useTina({
    query,
    variables: { 
      homeRelativePath: '/home.md',
      // concertsRelativePath: '/content/concert',
     },
    data: initialData,
  })
  const {title} = data.getHomeDocument.data
  // const {concerts} = data.getConcertDocument.data

  return (
    <>
      <Layout>
        <Head>
          <title>Symfonicky orchestr Prahy 8</title>
        </Head>
        <StyledIntro>
          <Image priority src='/assets/images/intro.jpg' layout='fill' objectFit='cover' alt='Uvodni pozadi' />
          <StyledIntroText>{title}</StyledIntroText>
        </StyledIntro>
        <StyledConcertsSection>
          <SectionTitle>
            Nejbližší koncert
          </SectionTitle>
          <ConcertCard date={new Date()} name='Koncert pro princeznu' time='20:00' address='U strouhy 36, Praha 2' conductor='Jáchym Svoboda' solist='Lenka Boudová' />
        </StyledConcertsSection>
      </Layout>
    </>
  )
}

export const getStaticProps = async () => {
  const variables = { 
    homeRelativePath: '/home.md',
    // concertsRelativePath: '/content/concert',
  }
  const query = `
    query HomeQuery($homeRelativePath: String!) {
      getHomeDocument(relativePath: $homeRelativePath) {
        data {
          title
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

// getConcertsDocument(relativePath: $concertsRelativePath) {
//   data {
//     concerts {
//       name
//       date
//       time
//       address
//     }
//   }
// }