import styled from 'styled-components'

export const StyledWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 60px;
    margin-bottom: 60px;

    @media screen and (max-width: 1140px) {
        grid-template-columns: 1fr;
        grid-row-gap: 60px;
        grid-template-rows: auto auto;
        text-align: center;
    }
`

export const StyledMapWrapper = styled.div`
    margin-top: 30px;
    height: 300px;
`