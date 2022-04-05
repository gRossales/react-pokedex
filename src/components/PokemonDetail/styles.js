import styled from "styled-components";
import { Link } from 'react-router-dom';


export const Container = styled.div`
  display: flex;
  height: calc(100vh - 5rem);
  flex-direction: column;
  justify-content: center;
  align-items: space-between;
  max-width: 1320px;
  margin: 0 auto;
`;

export const InnerContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-content: center;
  @media (min-width: 900px) {
    grid-template-columns: 1fr 2fr ;  
    margin-top: 10rem;
  }
`;

export const BodyStats = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  div {
    margin-top: 5px;
    display: flex;
    justify-content: space-evenly;
    flex-direction: row;
    h5 {
      color: #222;
      font-weight: 500;
    }  
  }
`;


export const Type = styled.div`
  padding: 5px 10px;
  margin: 10px 0px 10px 0px;
  border-radius: 5px;
  background: var(${props=> (props.background)});
  color: #fff;
  font-size: 14px;
  font-weight: bold ;
`;

export const Types = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: space-evenly;
`;

export const Wrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  h3 {
    color: #000;
    text-transform: capitalize;
    font-weight: bold;
    text-align: center;
  }
  img {
    align-self: center;
    width: 96px;
    height: 96px;
    @media (min-width: 600px) {
      width: 128px;
      height: 128px;
    }
  }
`;

export const StatsWrapper = styled.div`
  margin-top: 1.5rem;
  display: flex;
  flex: 3;
  flex-direction: column;
  align-items: center;
  h4 {
    font-weight: bold;
  }
  h5 {
    color: #555;
  }
`;

export const StatsBarContainer = styled.div`
  border-radius: 10px;
  height: 20px;
  background: #ddd;
  flex: 1;
`;

export const StatsBar = styled.div`
  border-radius: 10px;
  height: 20px;
  width: ${props=> props.width};
  display: flex;
  background: var(${props=> props.background});
  align-items: center;
  justify-content: end;
  p {
    margin-inline: 5px;
    color: #111;
    text-align: end;
    font-weight: 600;
    font-size: 10px;
    text-transform: uppercase;
  }
`;

export const StatsRow = styled.div`
  margin-top: 5px;
  width: 80%;
  display: flex;
  flex-direction: column;
  text-transform: uppercase;
`;

// export const statsColors = {
//   hp: "#FF5959",
//   attack: "#F5AC78",
//   defense: "#FAE078",
//   "special-attack": "#9DB7F5",
//   "special-defense": "#A7DB8D",
//   speed: "#FA92B2",
// };

export const StyledLink = styled(Link)`
  bottom: 1rem;  
  text-align: center ;
  cursor:pointer;
  background-color: var(--background);
  color: #fff;
  font-weight: 500;
  padding: 1rem 2rem;
  border-radius: 5px;
  width: 150px;
  border: none;
  margin: auto 0 2rem 1rem ;
  transition: filter 0.2s ;
  &:hover{
    filter: brightness(1.3);
  }
`;
