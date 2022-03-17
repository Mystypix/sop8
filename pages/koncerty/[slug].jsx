import Layout from '../../components/layout'
import Header from '../../components/header'
import SectionTitle from '../../components/section-title'
import Head from 'next/head'
import { staticRequest } from 'tinacms'
import { useTina } from 'tinacms/dist/edit-state'

const query = `
  query ConcertDetailQuery($relativePath: String!) {
    getConcertDocument(relativePath: $relativePath) {
      data {
        name
      }
    }
  }
`

export default function ConcertDetail(props) {

  const { data } = useTina({
    query,
    variables: props.variables,
    data: props.data,
  })

  const prdel = data.getConcertDocument.data
  console.log('zebyyby', prdel)
  return (
    <>
      <Layout>
        <Head>
          <title>Symfonicky orchestr Prahy 8</title>
        </Head>
        <Header />
        {/* <SectionTitle>Koncerty - Detail</SectionTitle> */}
        <div>
          {/* {conductors.map((props) => {
            return (
              <Conductor key={props.name} {...props} />
            )
          })} */}
          jdkfjdkfgjkd
        </div>
      </Layout>
    </>
  )
}

export const getStaticPaths = async () => {
  const concertListData = await staticRequest({
    query: `
      query GetPostList {
        getConcertList {
          edges {
            node {
              sys {
                filename
              }
            }
          }
        }
      }
    `,
  })

  return {
    paths: concertListData.getConcertList.edges.map(concert => ({
      params: { slug: concert.node.sys.filename },
    })),
    fallback: 'blocking',
  }
}

export const getStaticProps = async ({params}) => {
  const variables = { relativePath: params.slug + '.md'}
  console.log('variables', variables)
  const data = await staticRequest({
    query,
    variables,
  })

  return {
    props: {
      query,
      variables,
      data,
    },
  }
}