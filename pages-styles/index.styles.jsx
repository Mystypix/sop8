import styled from 'styled-components'

export const StyledIntro = styled.section`
    height: calc(100vh - 110px);
`

export const StyledIntroText = styled.h2`
    position: absolute;
    bottom: 60px;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    color: white;
    font-size: 30px;
    font-weight: 500;
    line-height: 45px;
    text-shadow: 0px 0px 30px #fff;
    font-family: 'Fondamento', cursive;

    @media screen and (max-width: 1140px) {
        font-size: 20px;
        line-height: 30px;
    }
`

export const StyledConcertsSection = styled.section`
    padding: 40px 0;
`