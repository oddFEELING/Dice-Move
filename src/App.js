import React, { useState, useEffect } from 'react';
import * as Style from './AppStyle';
import { _success, _info, _warning, _error } from 'react-color-log';
//-->  import colors value for the player objects
import COLORS from './Data/ColorData';
//-->  Dice images import
import Side_1 from './Images/SIDE_1.svg';
import Side_2 from './Images/SIDE_2.svg';
import Side_3 from './Images/SIDE_3.svg';
import Side_4 from './Images/SIDE_4.svg';
import Side_5 from './Images/SIDE_5.svg';
import Side_6 from './Images/SIDE_6.svg';

function App() {
  //-->  Player turn state
  const [Master_Turn, setMaster_Turn] = useState(true);
  //-->  Player one color state
  const [POne_Color, setPOne_Color] = useState('gold');
  //-->  player one track value state
  const [OneTrack, setOneTrack] = useState(0);
  //-->  player two track value state
  const [TwoTrack, setTwoTrack] = useState(0);
  //-->  Player two color state
  const [PTwo_Color, setPTwo_Color] = useState('White');
  //-->  new game state
  const [NewGame, setNewGame] = useState(true);
  //-->  State for die value
  const [DieVal, setDieVal] = useState(Side_6);
  //-->  Stated for rolled dice
  const [Rolled, setRolled] = useState(false);

  //-->  use efect for the dice roll
  useEffect(() => {
    _info(`Die value changed`);
  }, [Rolled]);

  //-->  Handle die click
  const handleClick = () => {
    setRolled(!Rolled);
    //-->  Stop rolling animation after 1 second
    setTimeout(() => {
      setRolled(false);
      _warning('Die reset');
    }, 1000);

    //-->  Change player turn
    setMaster_Turn(!Master_Turn);

    //-->  generate random number from 1 to 6
    const DVal = Math.floor(Math.random() * 6) + 1;
    _success(`The Die value is ${DVal}`);

    //-->  Change image on die
    switch (DVal) {
      case 1:
        setDieVal(Side_1);
        break;
      case 2:
        setDieVal(Side_2);
        break;
      case 3:
        setDieVal(Side_3);
        break;
      case 4:
        setDieVal(Side_4);
        break;
      case 5:
        setDieVal(Side_5);
        break;
      case 6:
        setDieVal(Side_6);
        break;
    }

    //-->  move the player card
    const movePlayer = () => {
      Master_Turn
        ? setOneTrack(() => OneTrack + DVal)
        : setTwoTrack(() => TwoTrack + DVal);
    };
    movePlayer();
    _info(`Player 1 score is now ${OneTrack}`);
    _info(`Player 2 score is now ${TwoTrack}`);
  };

  //-->  FUnction to set player colors
  const handleColorOne = (e) => {
    setPOne_Color(e.value);
  };

  const handleColorTwo = (e) => {
    setPTwo_Color(e.value);
  };

  //-->  Funnction to reset game
  const ResetGame = () => {
    setOneTrack(0);
    setTwoTrack(0);
  };

  return (
    <Style.Container>
      <h2>{' ||--> DICE RACE GAME <--||'}</h2>
      <Style.GameArea>
        <Style.Player
          color={POne_Color}
          borderColor='red'
          turn={Master_Turn}
          trackValue={`${OneTrack}%`}
        >
          <h2>P1</h2>
        </Style.Player>
        <Style.Player
          color={PTwo_Color}
          borderColor='blue'
          turn={!Master_Turn}
          trackValue={`${TwoTrack}%`}
        >
          <h2>P2</h2>
        </Style.Player>
      </Style.GameArea>
      <Style.ColorPallete>
        <Style.Selectorr
          placeholder='player-1 color'
          options={COLORS}
          onChange={handleColorOne}
        />
        <Style.Selectorr
          placeholder='player-2 color'
          options={COLORS}
          onChange={handleColorTwo}
        />
      </Style.ColorPallete>
      <Style.ActionDiv>
        <Style.ButtonsDiv>
          <h3>{`Player one ${OneTrack} : ${TwoTrack} Player two`}</h3>
          <button onClick={ResetGame}>New Game</button>
          <button>Set Color</button>
        </Style.ButtonsDiv>
        <Style.DiceDiv>
          <Style.DICE rolled={Rolled} onClick={handleClick}>
            <img src={DieVal} />
          </Style.DICE>
          <h3>{Master_Turn ? 'Player 1' : 'Player 2'} Roll die</h3>
        </Style.DiceDiv>
      </Style.ActionDiv>
      <h3>😋@github.com/oddFEELING </h3>
    </Style.Container>
  );
}

export default App;
