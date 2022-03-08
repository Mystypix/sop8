import {StyledWrapper, StyledName, StyledText, StyledAvatar} from './conductor.styles'
import Image from 'next/image'

const Conductor = ({photo, name, text}) => (
    <StyledWrapper>
        {photo && <StyledAvatar><Image src={photo} width='100px' height='100px' objectFit='cover' /></StyledAvatar>}
        <div>
            <StyledName>{name}</StyledName>
            <StyledText>{text}</StyledText>
        </div>
    </StyledWrapper>
)

export default Conductor