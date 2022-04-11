import {Container, StatsBarContainer, Bar, StatsText} from './styles';

export default function StatsBar({name, value}){
  const percent = value/3;

  return(
    <Container>
      <h5>{name}</h5>
      <StatsBarContainer>
      <Bar width={`${percent}%`} background={"--"+name}>
          <StatsText percent={percent} >{value}/300</StatsText>
        </Bar>
      </StatsBarContainer>
    </Container>
  );
}