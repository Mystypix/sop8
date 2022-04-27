import Layout from '../components/layout'
import Header from '../components/header'
import Head from 'next/head'
import { staticRequest } from 'tinacms'
import { useTina } from 'tinacms/dist/edit-state'
import {StyledGroup, StyledItem, StyledTitle, StyledWrapper} from '../pages-styles/obsazeni.styles'

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
        <StyledWrapper>
          {first_violins && (
            <StyledGroup>
              <StyledTitle>I. housle</StyledTitle>
              {first_violins.map(({name}) => <StyledItem key={name}>{name}</StyledItem>)}
            </StyledGroup>
          )}
          {second_violins && (
            <StyledGroup>
              <StyledTitle>II. housle</StyledTitle>
              {second_violins.map(({name}) => <StyledItem key={name}>{name}</StyledItem>)}
            </StyledGroup>
          )}
          {viols && (
            <StyledGroup>
              <StyledTitle>Violy</StyledTitle>
              {viols.map(({name}) => <StyledItem key={name}>{name}</StyledItem>)}
            </StyledGroup>
          )}
          {violoncellos && (
            <StyledGroup>
              <StyledTitle>Violoncella</StyledTitle>
              {violoncellos.map(({name}) => <StyledItem key={name}>{name}</StyledItem>)}
            </StyledGroup>
          )}
          {basses && (
            <StyledGroup>
              <StyledTitle>Kontrabasy</StyledTitle>
              {basses.map(({name}) => <StyledItem key={name}>{name}</StyledItem>)}
            </StyledGroup>
          )}
          {flutes && (
            <StyledGroup>
              <StyledTitle>Flétny</StyledTitle>
              {flutes.map(({name}) => <StyledItem key={name}>{name}</StyledItem>)}
            </StyledGroup>
          )}
          {oboes && (
            <StyledGroup>
              <StyledTitle>Hoboje</StyledTitle>
              {oboes.map(({name}) => <StyledItem key={name}>{name}</StyledItem>)}
            </StyledGroup>
          )}
          {clarinets && (
            <StyledGroup>
              <StyledTitle>Klarinety</StyledTitle>
              {clarinets.map(({name}) => <StyledItem key={name}>{name}</StyledItem>)}
            </StyledGroup>
          )}
          {bassoons && (
            <StyledGroup>
              <StyledTitle>Fagoty</StyledTitle>
              {bassoons.map(({name}) => <StyledItem key={name}>{name}</StyledItem>)}
            </StyledGroup>
          )}
          {french_horns && (
            <StyledGroup>
              <StyledTitle>Lesní rohy</StyledTitle>
              {french_horns.map(({name}) => <StyledItem key={name}>{name}</StyledItem>)}
            </StyledGroup>
          )}
          {trumpets && (
            <StyledGroup>
              <StyledTitle>Trubky</StyledTitle>
              {trumpets.map(({name}) => <StyledItem key={name}>{name}</StyledItem>)}
            </StyledGroup>
          )}
          {trombones && (
            <StyledGroup>
              <StyledTitle>Trombóny</StyledTitle>
              {trombones.map(({name}) => <StyledItem key={name}>{name}</StyledItem>)}
            </StyledGroup>
          )}
          {tube && (
            <StyledGroup>
              <StyledTitle>Tuba</StyledTitle>
              {tube.map(({name}) => <StyledItem key={name}>{name}</StyledItem>)}
            </StyledGroup>
          )}
          {drums && (
            <StyledGroup>
              <StyledTitle>Bicí/tympán</StyledTitle>
              {drums.map(({name}) => <StyledItem key={name}>{name}</StyledItem>)}
            </StyledGroup>
          )}
        </StyledWrapper>
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
            name,
            concert
          }
          second_violins {
            name,
            concert
          }
          viols {
            name,
            concert
          }
          violoncellos {
            name,
            concert
          }
          basses {
            name,
            concert
          }
          flutes {
            name,
            concert
          }
          oboes {
            name,
            concert
          }
          clarinets {
            name,
            concert
          }
          bassoons {
            name,
            concert
          }
          french_horns {
            name,
            concert
          }
          trumpets {
            name,
            concert
          }
          trombones {
            name,
            concert
          }
          tube {
            name,
            concert
          }
          drums {
            name,
            concert
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