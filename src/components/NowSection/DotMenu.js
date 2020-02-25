import React from 'react';
import {
  View,
} from 'react-native';

import styled, { ThemeProvider } from 'styled-components/native';

const IconPlatformStyle = styled.View`
background-color: #292A2C;
width: 5px;
height: 5px;
border-radius: 999px;
box-shadow:  -1px -1px 3px rgba(225, 229, 254, 0.3);

`;

const IconPlatformShadowStyle = styled.View`

background-color: #292A2C;
width: 5px;
height: 5px;
border-radius: 999px;
box-shadow:   2px 2px 3px rgba(12, 6, 20, 0.6);
border: 1px solid #485C7E;
`;

function DotMenu() {
  return (
    <View style={{ justifyContent: 'space-around', alignItems: 'center', height: 25 }}>

      <View>
        <IconPlatformShadowStyle>
          <IconPlatformStyle />
        </IconPlatformShadowStyle>
      </View>
      <View>
        <IconPlatformShadowStyle>
          <IconPlatformStyle />
        </IconPlatformShadowStyle>
      </View>
      <View>
        <IconPlatformShadowStyle>
          <IconPlatformStyle />
        </IconPlatformShadowStyle>
      </View>
    </View>
  );
}

export default DotMenu;
