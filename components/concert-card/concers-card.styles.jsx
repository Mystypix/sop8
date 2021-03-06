import styled from 'styled-components'

export const StyledCard = styled.div`
    display: flex;
    margin: 0 auto 20px;
    border-radius: 5px;
    max-width: 500px;
    height: 100px;
    box-shadow: 0 3px 5px 0 rgba(0,0,0,.3);
    cursor: pointer;
    transition: box-shadow .2s;

    &:hover {
        box-shadow: 0 3px 10px 0 rgba(0,0,0,.3);
    }
`

export const StyledDate = styled.div`
    flex: 0 0 100px;
    display: flex;
    align-items: center;
    border-right: 2px dashed var(--color-primary);
    padding: 15px 20px;
    text-align: center;
    line-height: 30px;
    font-weight: 700;
    color: var(--color-primary);
`

export const StyledConcertInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 15px 20px; 
`

export const StyledDetails = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    grid-column-gap: 15px;
`

export const StyledDetail = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    grid-column-gap: 5px;
    align-items: center;
`