import styled from "styled-components";

export const Container = styled.div`
  margin-top: 5px;
  width: 80%;
  display: flex;
  flex-direction: column;
  text-transform: uppercase;
`;

export const StatsBarContainer = styled.div`
  border-radius: 10px;
  height: 20px;
  background: #ddd;
  flex: 1;
  h5 {
    color: #555;
  }
`;

export const Bar = styled.div`
  border-radius: 10px;
  height: 20px;
  width: ${props => props.width};
  display: flex;
  background: var(${props => props.background});
  align-items: center;
  justify-content: end;
`;

export const StatsText = styled.p`
  margin-right: 0.5em;
  color: #111;
  text-align: end;
  font-weight: 600;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 1px;

  
  @media (max-width:480px){
    ${({percent}) => percent  < 16.6 ? 'transform: translateX(calc(100% + 0.6em))': null}
  }
  @media(max-width: 768px){
    ${({percent}) => percent  < 13.3 ? 'transform: translateX(calc(100% + 0.6em))': null}
  }
  @media (min-width: 768px) and (max-width: 900px){
    ${({percent}) => percent  < 10 ? 'transform: translateX(calc(100% + 0.6em))': null}
  }
  @media (min-width: 900px){
    ${({percent}) => percent  < 10 ? 'transform: translateX(calc(100% + 0.6em))': null}
  }
`;
