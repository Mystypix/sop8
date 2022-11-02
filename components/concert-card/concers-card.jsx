import AccessTimeIcon from '@mui/icons-material/AccessTime'
import MapIcon from '@mui/icons-material/Map'
import AutoFixNormalIcon from '@mui/icons-material/AutoFixNormal';
import StarIcon from '@mui/icons-material/Star';
import { ConcertContent, ConcertData, ConcertDataItem, ConcertDate, ConcertItem, ConcertName, ConcertPerformers } from './concers-card.styles'

const ConcertCard = ({name, date, time, price, address, conductor, solist}) => {
    const day = new Date(date).getDate()
    const month = new Date(date).toLocaleString('cs', { month: 'short' })

    return (
        <ConcertItem>
            <ConcertDate><div>{day}</div><div>{month}</div></ConcertDate>
            <ConcertContent>
                {name && <ConcertName>{name}</ConcertName>}
                <ConcertData>
                    {time && (
                        <ConcertDataItem>
                            <AccessTimeIcon htmlColor='var(--color-primary)' />
                            {time}
                        </ConcertDataItem>
                    )}
                    {price && (new Date(date) >= new Date()) && <div>{price}</div>}
                    {address && (
                        <ConcertDataItem>
                            <MapIcon htmlColor='var(--color-primary)' />
                            {address}
                        </ConcertDataItem>
                    )}
                </ConcertData>
                <ConcertPerformers>
                    {conductor && (
                        <ConcertDataItem>
                            <AutoFixNormalIcon htmlColor='var(--color-primary)' />
                            {conductor}
                        </ConcertDataItem>
                    )}
                    {solist && (
                        <ConcertDataItem>
                            <StarIcon htmlColor='var(--color-primary)' />
                            {solist}
                        </ConcertDataItem>
                    )}
            </ConcertPerformers>
            </ConcertContent>
        </ConcertItem>
    )
}

export default ConcertCard
