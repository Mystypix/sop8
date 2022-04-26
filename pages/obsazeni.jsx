import Layout from '../components/layout'
import Header from '../components/header'
import Head from 'next/head'
import { staticRequest } from 'tinacms'
import { useTina } from 'tinacms/dist/edit-state'
import {StyledGroup} from '../pages-styles/obsazeni.styles'

export default function Structure({data: initialData, query}) {
  const { data } = useTina({
    query,
    variables: { relativePath: '/structure.md' },
    data: initialData,
  })

  const {
    basses,
    bassoons,
    clarinets,
    drums,
    first_violins,
    flutes,
    french_horns,
    oboes,
    second_violins,
    trombones,
    trumpets,
    tube,
    violoncellos,
    viols,
  } = data.getStructureDocument.data
  return (
    <>
      <Layout>
        <Head>
          <title>Symfonicky orchestr Prahy 8</title>
        </Head>
        <Header />
        {first_violins && (
          <StyledGroup>
            <div>I. housle</div>
            {first_violins.map(({name}) => <div key={name}>{name}</div>)}
          </StyledGroup>
        )}
        {second_violins && (
          <StyledGroup>
            <div>II. housle</div>
            {second_violins.map(({name}) => <div key={name}>{name}</div>)}
          </StyledGroup>
        )}
        {viols && (
          <StyledGroup>
            <div>Violy</div>
            {viols.map(({name}) => <div key={name}>{name}</div>)}
          </StyledGroup>
        )}
        {violoncellos && (
          <StyledGroup>
            <div>Violoncella</div>
            {violoncellos.map(({name}) => <div key={name}>{name}</div>)}
          </StyledGroup>
        )}
        {basses && (
          <StyledGroup>
            <div>Kontrabasy</div>
            {basses.map(({name}) => <div key={name}>{name}</div>)}
          </StyledGroup>
        )}
        {flutes && (
          <StyledGroup>
            <div>Flétny</div>
            {flutes.map(({name}) => <div key={name}>{name}</div>)}
          </StyledGroup>
        )}
        {oboes && (
          <StyledGroup>
            <div>Hoboje</div>
            {oboes.map(({name}) => <div key={name}>{name}</div>)}
          </StyledGroup>
        )}
        {clarinets && (
          <StyledGroup>
            <div>Klarinety</div>
            {clarinets.map(({name}) => <div key={name}>{name}</div>)}
          </StyledGroup>
        )}
        {bassoons && (
          <StyledGroup>
            <div>Fagoty</div>
            {bassoons.map(({name}) => <div key={name}>{name}</div>)}
          </StyledGroup>
        )}
        {french_horns && (
          <StyledGroup>
            <div>Lesní rohy</div>
            {french_horns.map(({name}) => <div key={name}>{name}</div>)}
          </StyledGroup>
        )}
        {trumpets && (
          <StyledGroup>
            <div>Trubky</div>
            {trumpets.map(({name}) => <div key={name}>{name}</div>)}
          </StyledGroup>
        )}
        {trombones && (
          <StyledGroup>
            <div>Trombóny</div>
            {trombones.map(({name}) => <div key={name}>{name}</div>)}
          </StyledGroup>
        )}
        {tube && (
          <StyledGroup>
            <div>Tuba</div>
            {tube.map(({name}) => <div key={name}>{name}</div>)}
          </StyledGroup>
        )}
        {drums && (
          <StyledGroup>
            <div>Bicí/tympán</div>
            {drums.map(({name}) => <div key={name}>{name}</div>)}
          </StyledGroup>
        )}
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
            name
          }
          second_violins {
            name
          }
          viols {
            name
          }
          violoncellos {
            name
          }
          basses {
            name
          }
          flutes {
            name
          }
          oboes {
            name
          }
          clarinets {
            name
          }
          bassoons {
            name
          }
          french_horns {
            name
          }
          trumpets {
            name
          }
          trombones {
            name
          }
          tube {
            name
          }
          drums {
            name
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