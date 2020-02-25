import React, { useState } from 'react';
import { View, Text } from 'react-native';

import Interactable from 'react-interactable';
import styled from 'styled-components/native';

const StyledCursor = styled.View`
width: 40px;
height: 40px;
background: #41516C;
border: 1px solid #485C7E;
box-shadow: 4px 4px 7px rgba(0, 0, 0, 0.4);
border-radius: 80px;
justify-content: center;
align-items: center;
`;

const StyleText = styled.Text`
font-size: 20px;
font-weight: 500;
color: #9CB4DC;
text-shadow: -1px -1px 1px rgba(255, 255, 255, 0.28);

`;

const ShadowStyleText = styled.Text`
position: absolute;
font-size: 20px;
font-weight: 500; 
color: #9CB4DC;
text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.62);
`;

const Cursor = ({
  x, count, size, setDisplay,
}) => {
  const [displayNumber, setDisplayNumber] = useState(1);
  const onDrawerSnap = (event) => {
    setDisplay(event.id);
    setDisplayNumber(event.id);
  };
  return (
    <View style={{
      zIndex: 100, height: 40, width: 120,
    }}
    >
      <Interactable.View snapPoints={[{ x: 0, id: 1 }, { x: 40, id: 2 }, { x: 80, id: 3 }]} horizontalOnly boundaries={{ left: 0, right: 80, bounce: 0.5 }} onSnap={(event) => onDrawerSnap(event)}>
        <StyledCursor>
          <StyleText>{displayNumber}</StyleText>
          <ShadowStyleText>{displayNumber}</ShadowStyleText>
        </StyledCursor>
      </Interactable.View>
    </View>

  );
};

export default Cursor;
