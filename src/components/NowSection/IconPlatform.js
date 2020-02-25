import React from 'react';

import {
  View,
} from 'react-native';

import styled, { ThemeProvider } from 'styled-components/native';

const IconPlatformStyle = styled.View`
width: 200px;
height: 200px;
border-radius: 999px;
box-shadow: -1px -3px 5px rgba(225, 229, 254, 0.2);

`;

const IconPlatformShadowStyle = styled.View`

width: 200px;
height: 200px;
border-radius: 999px;
box-shadow:   5px 4px 7px rgba(12, 6, 20, 0.6);
border: 1px solid #485C7E;
`;


const ButtonStyle = styled.View`
position: relative;
width: 40px;
height: 40px;

box-shadow: -1px -3px 5px rgba(225, 229, 254, 0.2);
border-radius: 4px;
border: 1px solid #485C7E;

`;

const ButtonStyleShadow = styled.View`

width: 40px;
height: 40px;
margin: 10px;
box-shadow: 4px 4px 7px rgba(0, 0, 0, 0.2);
border-radius: 4px;


`;


const IconPlatform = () => (
  <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
    <IconPlatformShadowStyle>
      <IconPlatformStyle>
        <View style={{
          height: 200, width: 200, alignItems: 'center', justifyContent: 'center', backgroundColor: '#485C7E', borderRadius: 999,
        }}
        />
      </IconPlatformStyle>
    </IconPlatformShadowStyle>
  </View>
);

export default IconPlatform;
