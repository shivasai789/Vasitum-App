import {CardContainer,CardName,CardCount,CardDescription} from './styledComponents'

const TopCards = (props) => {
    const {cardDetails} = props
    const {cardName,cardCount,cardDescription,cardColor,cardDescriptionColor} = cardDetails
    return (
        <CardContainer bgColor={cardColor}>
            <CardName>{cardName}</CardName>
            <CardCount>{cardCount}</CardCount>
            <CardDescription cardDescriptionColor={cardDescriptionColor}>{cardDescription}</CardDescription>
        </CardContainer>
    )
}

export default TopCards