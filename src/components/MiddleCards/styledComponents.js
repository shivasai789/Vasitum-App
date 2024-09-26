import styled from "styled-components";

export const CardContainer = styled.li`
list-style-type: none;
width: 48%;
height: 190px;
border-radius: 10px;
background-color: ${props => props.bgColor};
padding: 15px;
box-sizing: border-box;
border: 1px solid #E0E0E0;
margin-top: 20px;
display: flex;

@media (max-width: 700px){
    width: 100%;
}
`

export const CardHeading = styled.h1`
font-size: 20px;
font-weight: 500;`

export const CardCount = styled.h1`
font-size: 40px;
font-weight: 500;
margin-top: 10px;`

export const TotalContainer = styled.p`
color: #686868;
margin-top: 7px;`

export const ImageContainer = styled.img`
width: 100%;

@media (max-width: 700px){
    height: 80%;
}`

export const IncreasePercentageContainer = styled.div`
background-color: #FFEFE7;
padding: 3px;
border-radius: 3px;
width: 100%;
text-align: center;
margin-top: 0px;`