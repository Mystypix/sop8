import styled from 'styled-components'

const StyledNavigation = styled.div`
    position: sticky;
    top: 0;
    left: 0;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 30px;
    box-sizing: border-box;
    padding: 0 30px;
    width: 100vw;
    height: 70px;
    // background: rgba(255,255,255,.1);
`

export default function Navigation({children}) {
    return <StyledNavigation>{children}</StyledNavigation>
}
