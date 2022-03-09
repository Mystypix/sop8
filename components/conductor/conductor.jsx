import {StyledWrapper, StyledName, StyledText, StyledAvatar} from './conductor.styles'
import Image from 'next/image'

const Conductor = ({photo, name, text}) => (
    <StyledWrapper>
        {photo && <StyledAvatar><Image src={photo} width='200px' height='200px' objectFit='cover' /></StyledAvatar>}
        <div>
            <StyledName>{name}</StyledName>
            <StyledText>{text}</StyledText>
        </div>
    </StyledWrapper>
)

export default Conductor