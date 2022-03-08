import {DateTime} from 'luxon'
import Link from 'next/link'
import {StyledCard, StyledDate, StyledConcertInfo} from './concers-card.styles'

const ConcertCard = ({name, date, time, address}) => (
    <Link href='/'>
        <StyledCard>
            <StyledDate>{DateTime.fromISO(date).toFormat('d. L. y')}</StyledDate>
            <StyledConcertInfo>
                <div>{name}</div>
                <div>
                    <div>{time}</div>
                    <div>{address}</div>
                </div>
            </StyledConcertInfo>
        </StyledCard>
    </Link>
)

export default ConcertCard