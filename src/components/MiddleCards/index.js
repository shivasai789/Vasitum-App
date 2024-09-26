import {CardContainer,CardHeading,CardCount,TotalContainer,ImageContainer,IncreasePercentageContainer} from './styledComponents'

const MiddleCards = (props) => {
    const {cardDetails} = props
    const {cardName,cardCount,totalMen,totalWomen,increasePercentage} = cardDetails
    return (
        <CardContainer>
            <div style={{width: '50%'}}>
                <CardHeading>{cardName}</CardHeading>
                <CardCount>{cardCount}</CardCount>
                <TotalContainer>{`${totalMen} Men`}</TotalContainer>
                <TotalContainer>{`${totalWomen} Women`}</TotalContainer>
            </div>
            <div style={{width: '50%'}}>
                <ImageContainer src="Graph.png" alt='graph' />
                <IncreasePercentageContainer>
                    {`+${increasePercentage}% Past month`}
                </IncreasePercentageContainer>
            </div>
        </CardContainer>
    )
}

export default MiddleCards