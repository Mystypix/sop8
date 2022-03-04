import {StyledCard} from './concers-card.styles'

const ConcertCard = ({name, date}) => (
    <StyledCard>
        <div>{name}</div>
        <div>{date}</div>
    </StyledCard>
)

export default ConcertCard