import Link from 'next/link'
import styled from 'styled-components'

const StyledLink = styled(Link)`
    margin: 0 10px;
    padding: 0 5px;
    font-size: 20px;
    color: white;
    font-weight: bold;
    text-decoration: none;
`

export default function NavigationItem(props) {
    return <StyledLink {...props} />
}
