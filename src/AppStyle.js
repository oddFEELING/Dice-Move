import styled from 'styled-components';
import Select from 'react-select';

export const Container = styled.div`
  height: 98vh;
  width: 96%;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 1vh 2%;
  background: linear-gradient(41deg, rgb(41, 193, 198), rgb(194, 18, 195));
  h2 {
    font-size: clamp(1rem, 5vw, 2rem);
    color: white;
  }
`;

//-->  The player race area
export const GameArea = styled.div`
  width: 96%;
  height: 25%;
  display: flex;
  padding: 0 2%;
  flex-direction: column;
  justify-content: space-around;
  border-radius: 8px;
  box-shadow: 3px 3px 9px 3px rgba(0, 0, 0, 0.4);
  background-color: rgba(0, 0, 0, 0.5);

  /* Make race track bigger on biger screens */
  @media screen and (min-width: 850px) {
    height: 35%;
  } ;
`;

//-->  The player cards
export const Player = styled.div`
  width: 10%;
  height: 40%;
  display: flex;
  position: relative;
  left: ${(props) => props.trackValue};
  flex-direction: column;
  align-items: center;
  opacity: ${(props) => (props.turn ? 1.0 : 0.5)};
  justify-content: center;
  transition: 300ms all ease-in-out;
  border-left: 6px solid ${(props) => props.borderColor};
  box-shadow: 3px 3px 9px 3px rgba(0, 0, 0, 0.4);
  background-color: ${(props) => props.color};

  &:hover {
    transform: scale(1.03);
  }
  h2 {
    font-family: Roboto;
    font-size: clamp(1rem, 5vw, 2rem);
    color: black;
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

//-->  Button and dice div
export const ActionDiv = styled.div`
  width: 96%;
  height: 40%;
  padding: 2% 2%;
  display: flex;
  justify-content: space-evenly;
`;

//-->  button divs
export const ButtonsDiv = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  background-color: rgba(300, 300, 300, 0.3);
  justify-content: center;

  /* Style the buttons on the button div */
  button {
    height: 13%;
    width: 40%;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 6%;
    margin-left: 10%;
    transition: 300ms all ease-in-out;
    box-shadow: 3px 3px 9px 3px rgba(0, 0, 0, 0.4);

    /* set hover interactions  */
    &:hover {
      transform: scale(1.03);
    }
  }

  h3 {
    align-self: center;
    font-size: clamp(0.5rem, 3.5vw, 1.4rem);
  }
`;
//-->  Dice div
export const DiceDiv = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

//-->   the Dice itself
export const DICE = styled.div`
  width: 170px;
  height: 170px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: #fff;
  transition: 300ms all ease-in-out;
  animation: Rolling 1s infinite;
  animation-play-state: ${(props) => (props.rolled ? 'running' : 'paused')};
  box-shadow: 3px 3px 15px 3px rgba(212, 212, 212, 0.4);

  /* Control the rolling animation */
  @keyframes Rolling {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  /* bigger dice for tablet */
  @media screen and (min-width: 650px) {
    width: 220px;
    height: 220px;
  }

  /* bigger dice for small laptop */
  @media screen and (min-width: 850px) {
    width: 280px;
    height: 280px;
  }

  /* bigger dice for normal screen */
  @media screen and (min-width: 1100px) {
    width: 300px;
    height: 300px;
  }

  /* set hover interactions  */
  &:hover {
    transform: scale(1.05);
  }

  /* Style image within the die */
  img {
    width: 90%;
    height: 90%;
  }
`;
