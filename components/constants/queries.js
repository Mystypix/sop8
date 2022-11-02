export const concertListQuery = `
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