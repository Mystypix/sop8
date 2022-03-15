import Layout from '../components/layout'
import Header from '../components/header'
import SectionTitle from '../components/section-title'
import Map from '../components/map'
import {StyledWrapper, StyledMapWrapper} from '../pages-styles/kontakt.styles'
import Head from 'next/head'
import { staticRequest } from 'tinacms'
import { useTina } from 'tinacms/dist/edit-state'

const PRACTICE_PLACE_COORDINATES = ['14.4068328', '50.0803728']
const DEFAULT_ZOOM = [15]

export default function Contact({data: initialData, query}) {
  const { data } = useTina({
    query,
    variables: { relativePath: '/contact.md' },
    data: initialData,
  })

  const {email, leadership, practice} = data.getContactDocument.data
  return (
    <>
      <Layout>
        <Head>
          <title>Symfonicky orchestr Prahy 8 - Kontakt</title>
        </Head>
        <Header />
        <SectionTitle>Kontakt</SectionTitle>
        <StyledWrapper>
          <div>
            <div>
              <strong>Orchestrální Email: </strong>
              <a href={`mailto:${email}`}>{email}</a>
            </div>
            <div>
              <div><strong>Vedoucí orchestru: </strong>{leadership.name}</div>
              <div><strong>Email:</strong> <a href={`mailto:${leadership.email}`}>{leadership.email}</a></div>
              <div><strong>Telefon:</strong> <a href={`tel:${leadership.phone}`}>{leadership.phone}</a></div>
            </div>
          </div>
          <div>
            <div><strong>Kde hrajeme</strong></div>
            <div>{practice.text}</div>
            <div>{practice.address}</div>
            <StyledMapWrapper>
              <Map center={PRACTICE_PLACE_COORDINATES} zoom={DEFAULT_ZOOM} />
            </StyledMapWrapper>
          </div>
        </StyledWrapper>
      </Layout>
    </>
  )
}

export const getStaticProps = async () => {
  const variables = { relativePath: '/contact.md' }
  const query = `
    query ContactQuery($relativePath: String!) {
      getContactDocument(relativePath: $relativePath) {
        data {
          email,
          leadership {
            name,
            phone,
            email
          },
          practice {
            text,
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