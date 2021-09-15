import React, { useState } from 'react';
import * as Style from './AppStyle';

function App() {
  const [Master_Turn, setMaster_Turn] = useState(true);
  const [POne_Color, setPOne_Color] = useState('gold');
  const [PTwo_Color, setPTwo_Color] = useState('White');
  const colors = [
    { value: 'green', label: 'Green' },
    { value: 'blue', label: 'Blue' },
    { value: 'purple', label: 'Purple' },
  ];
  return (
    <Style.Container>
      <h2>{' ||--> DICE RACE GAME <--||'}</h2>
      <Style.GameArea>
        <Style.Player_1 color={POne_Color} borderColor='red' turn={Master_Turn}>
          <h2>P1</h2>
        </Style.Player_1>
        <Style.Player_1 color={PTwo_Color} borderColor='blue'>
          <h2>P2</h2>
        </Style.Player_1>
      </Style.GameArea>
      <Style.ColorPallete>
        <Style.Selectorr options={colors} placeholder='player-1 color' />
        <Style.Selectorr options={colors} placeholder='player-2 color' />
      </Style.ColorPallete>
    </Style.Container>
  );
}

export default App;
