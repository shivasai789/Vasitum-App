import styled from "styled-components";

export const AnnouncementsContainer = styled.div`
  width: 95%;
  margin-top: 20px;
  border: 1px solid #e5e5e5;
  border-radius: 10px;
  padding: 20px;

  @media (max-width: 1200px){
  width: 93.5%;
  }

  @media (max-width: 700px){
  width: 93%;
  padding: 10px;
  }
`;


export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  @media (max-width: 700px){
  flex-direction: column;
  }

  h2 {
    margin: 0;
    font-weight: 500;
    font-size: 20px;
    
  }

  div{
    display: flex;
    align-items: center;
    border: 1px solid #EFEFEF;
    padding: 8px;
    font-size: 13px;
    margin-right: 6px;
    border-radius: 4px;
    cursor: pointer;

    span{
        margin-right: 4px;
    }

  }
`;

export const AnnouncementsList = styled.div`
  margin-bottom: 20px;
`;

export const AnnouncementItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #e5e5e5;
  margin: 10px 0px 10px 0px;
  background-color: #FAFAFA;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
`;

export const TextContent = styled.div`
  flex: 1;
`;

export const Title = styled.p`
  font-size: 16px;
  font-weight: 400;
  margin: 0;
`;

export const Time = styled.p`
  font-size: 10px;
  color: gray;
  margin-top: 10px;
`;

export const Icon = styled.div`
  margin-left: 10px;
`;

export const PinButton = styled.button`
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  margin-right: 15px;
`;

export const SeeAll = styled.div`
  text-align: center;

  a {
    text-decoration: none;
    color: red;
    font-weight: bold;
  }
`;