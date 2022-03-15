import {DateTime} from 'luxon'
import Link from 'next/link'
import {StyledCard, StyledDate, StyledConcertInfo, StyledDetail, StyledDetails} from './concers-card.styles'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import MapIcon from '@mui/icons-material/Map'

const ConcertCard = ({name, date, time, address}) => (
    <Link href={`/koncerty/${name.toLowerCase()}`}>
        <StyledCard>
            <StyledDate>{DateTime.fromISO(date).toFormat('d. L. y')}</StyledDate>
            <StyledConcertInfo>
                <div>{name}</div>
                <StyledDetails>
                    <StyledDetail>
                        <AccessTimeIcon htmlColor='var(--color-primary)' />
                        {time}
                    </StyledDetail>
                    <StyledDetail>
                        <MapIcon htmlColor='var(--color-primary)' />
                        {address}
                    </StyledDetail>
                </StyledDetails>
            </StyledConcertInfo>
        </StyledCard>
    </Link>
)

export default ConcertCard