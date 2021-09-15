import styled from 'styled-components';
import Select from 'react-select';

export const Container = styled.div`
  height: 98vh;
  width: 96%;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 1vh 2%;
  background-color: #dffe33;
`;

//-->  The player race area
export const GameArea = styled.div`
  width: 96%;
  height: 35%;
  display: flex;
  padding: 0 2%;
  flex-direction: column;
  justify-content: space-around;
  border-radius: 8px;
  box-shadow: 3px 3px 9px 3px rgba(0, 0, 0, 0.4);
  background-color: rgba(0, 0, 0, 0.5);
`;

//-->  The player cards
export const Player_1 = styled.div`
  width: 10%;
  height: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: ${(props) => (props.turn ? 1.0 : 0.5)};
  justify-content: center;
  transition: 300ms all ease-in-out;
  border-left: 4px solid ${(props) => props.borderColor};
  box-shadow: 3px 3px 9px 3px rgba(0, 0, 0, 0.4);
  background-color: ${(props) => props.color};

  &:hover {
    transform: scale(1.03);
  }
  h2 {
    font-family: Roboto;
    font-size: clamp(1rem, 5vw, 2rem);
  }
`;

//-->  The color selector area

export const ColorPallete = styled.div`
  width: 100%;
  height: 8%;
  display: flex;
  align-items: center;
  margin-top: 2%;
  background-color: rgba(22, 201, 120, 0.3);
  justify-content: space-around;
`;

export const Selectorr = styled(Select)`
  width: 45%;

  @media screen and (min-width: 850px) {
    width: 35%;
  }
  @media screen and (min-width: 1200px) {
    width: 20%;
  }
`;
