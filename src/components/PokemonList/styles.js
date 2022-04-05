import styled from "styled-components";

export const Container = styled.div`
  height: calc(100vh - 80px);
  display: grid;
  grid-template-columns: repeat(5,200px);
  grid-template-rows: auto 213px 213px auto 80px;
  grid-template-areas:
  "none none none none none"
  "pokemon1 pokemon2 pokemon3 pokemon4 pokemon5"
  "pokemon6 pokemon7 pokemon8 pokemon9 pokemon10"
  ". . . . ."
  "footer footer footer footer footer";
  place-items: center;
  justify-content: center;
  align-content: stretch;
  gap: 1.5rem;
  max-width: 1320px;
  margin: 0 auto;

  @media (max-width: 1160px) {
    grid-template-columns: repeat(3,200px);
    grid-template-rows: auto repeat(4,213px) 80px;
    grid-template-areas:
    "none none none"
    "pokemon1 pokemon2 pokemon3" 
    "pokemon4 pokemon5 pokemon6" 
    "pokemon7 pokemon8 pokemon9" 
    ". pokemon10 ."
    "footer footer footer";
  }
  @media (max-width: 750px) {
    grid-template-columns: repeat(3,150px);
    grid-template-rows: auto repeat(4,168px) 80px;
  }
  @media (max-width: 550px) {
    grid-template-columns: repeat(2,150px);
    grid-template-rows: auto repeat(5,168px) 80px;
    grid-template-areas:
    "none none"
    "pokemon1 pokemon2" 
    "pokemon3 pokemon4" 
    "pokemon5 pokemon6" 
    "pokemon7 pokemon8" 
    "pokemon9 pokemon10"
    "footer footer";
  }
`;

export const Button = styled.button`
  grid-area: footer;
  grid-column: 1;
  justify-self: start;
  & + &{
    grid-area: footer;
    grid-column: 5;
    justify-self: end;
    @media (max-width: 1160px) {
      grid-column: 3;
    }
    @media (max-width: 550px) {
      grid-column: 2;
    }
  }
`;