import styled from 'styled-components'

export const StyledWrapper = styled.div`
    display: flex;
    margin: 0 auto 120px;
    max-width: 800px;
    cursor: pointer;

    @media screen and (max-width: 1140px) {
        flex-direction: column;
        align-items: center;
        text-align: center;
    }
`

export const StyledAvatar = styled.div`
    flex: 0 0 200px;
    margin-right: 60px;
    border-radius: 50%;
    overflow: hidden;
    width: 200px;
    height: 200px;

    @media screen and (max-width: 1140px) {
        flex: 0 0 150px;
        margin-right: unset;
        margin-bottom: 30px;
        width: 150px;
        height: 150px;
    }
`

export const StyledName = styled.div`
    margin-bottom: 15px;
    font-size: 16px;
    font-weight: 500;
`

export const StyledText = styled.div`
    font-size: 14px;
    line-height: 21px;
`