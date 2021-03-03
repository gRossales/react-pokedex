import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex: 1;
  height: 100vh- 2rem;
  flex-direction: column;
  justify-content: center;
  max-width: 1320px;
  margin: 1rem auto;
`;

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (min-width: 900px) {
    flex-direction: row;
    margin-top: 10rem;
  }
`;

export const Image = styled.img`
  align-self: center;
  width: 96px;
  height: 96px;
  @media (min-width: 600px) {
    width: 128px;
    height: 128px;
  }
`;

export const Name = styled.h4`
  color: #000;
  text-transform: capitalize;
  font-weight: bold;
  text-align: center;
`;

export const BodyStats = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
`;

export const BodyStatsWrapper = styled.div`
  margin-top: 5px;
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
  h5 {
    color: #222;
    font-weight: 500;
  }
`;

export const Type = styled.div`
  padding: 5px 10px;
  margin: 10px 0px 10px 0px;
  border-radius: 5px;
  background: cyan;
  color: #fff;
  font-size: 14px;
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
  display: flex;
  background: #a00;
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

export const statsColors = {
  hp: "#FF5959",
  attack: "#F5AC78",
  defense: "#FAE078",
  "special-attack": "#9DB7F5",
  "special-defense": "#A7DB8D",
  speed: "#FA92B2",
};

export const Button = styled.button`
  position: absolute;
  bottom: 2rem;
`;
