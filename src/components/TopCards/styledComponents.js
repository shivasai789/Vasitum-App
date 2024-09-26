import styled from 'styled-components'

export const CardContainer = styled.li`
list-style-type: none;
display: flex;
width: 32%;
flex-direction: column;
flex-shrink: 1;
height: 140px;
border-radius: 10px;
background-color: ${props => props.bgColor};
padding: 15px;
box-sizing: border-box;

@media (max-width: 700px){
    width: 100%;
}
`

export const CardName = styled.h1`
font-size: 16px;
font-weight: 500;
`

export const CardCount = styled.h1`
font-weight: 500;
margin-top: 10px;
margin-bottom: 10px`

export const CardDescription = styled.p`
color: ${props => props.cardDescriptionColor}`