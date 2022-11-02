import styled from 'styled-components'

export const ConcertItem = styled.div`
    display: flex;
    margin: 0 auto 30px;
    max-width: 600px;
    background: #fff;
    box-shadow: 0 1px 10px 0 rgba(0,0,0,.1);
`

export const ConcertDate = styled.div`
    flex: 0 0 140px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-right: 10px dotted #f2f2f2;
    padding: 20px 0;
    font-size: 24px;
    text-align: center;
`

export const ConcertContent = styled.div`
    padding: 20px 30px;
`

export const ConcertName = styled.div`
    margin-bottom: 10px;
    font-weight: 700;
`

export const ConcertData = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
`

export const ConcertPerformers = styled.div`
    display: flex;
    align-items: center;
`

export const ConcertDataItem = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    margin-right: 20px;
`