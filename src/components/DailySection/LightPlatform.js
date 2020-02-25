import React from 'react';
import { ProgressCircle } from 'react-native-svg-charts';
import {
  View, Image, Text,
} from 'react-native';

import styled, { ThemeProvider } from 'styled-components/native';
import picture from '../../data/images/daylightInner.png';

const IconPlatformStyle = styled.View`
width: 185px;
height: 185px;
border-radius: 999px;
box-shadow: -1px -3px 5px rgba(225, 229, 254, 0.2);

`;

const IconPlatformShadowStyle = styled.View`
margin-top: 10px;
margin-bottom: 20px;
width: 185px;
height: 185px;
border-radius: 999px;
box-shadow:   5px 4px 7px rgba(12, 6, 20, 0.6);
border: 1px solid #485C7E;
`;


const ButtonStyle = styled.View`
position: relative;
width: 40px;
height: 40px;

box-shadow: -1px -3px 5px rgba(225, 229, 254, 0.1);
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


const LightPlatform = () => (
  <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
    <IconPlatformShadowStyle>
      <IconPlatformStyle>
        <View style={{
          height: 185, width: 185, alignItems: 'center', justifyContent: 'center', backgroundColor: '#262E3E', borderRadius: 999,
        }}
        >
          <Image
            style={{
              height: 156, width: 156, borderRadius: 200, justifyContent: 'center', position: 'absolute',

            }}
            source={require('../../data/images/daylightInner.png')}
          />
          <View style={{
            height: 185, width: 185, borderRadius: 200, justifyContent: 'center', alignItems: 'center', position: 'absolute',

          }}
          >
            <Text style={{ fontSize: 18, color: '#B9DFF0' }}>00:00</Text>
            <Text style={{ fontSize: 14, color: '#B9DFF0' }}>hrs</Text>
          </View>
          <View style={{
            height: 185, width: 185, justifyContent: 'center',
          }}
          >
            <ProgressCircle style={{ height: 154, transform: [{ rotateZ: '-80deg' }] }} progress={0.44} backgroundColor="rgba(255, 255, 255, 0)" progressColor="#A7D4EC" strokeWidth={26} />
          </View>

        </View>

      </IconPlatformStyle>
    </IconPlatformShadowStyle>
  </View>
);

export default LightPlatform;
