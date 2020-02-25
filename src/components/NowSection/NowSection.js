import React from 'react';
import InsetShadow from 'react-native-inset-shadow';

import {
  StyleSheet, Text, View,
} from 'react-native';

import styled, { ThemeProvider } from 'styled-components/native';
import IconPlatform from './IconPlatform';
import TempatureSwitch from './TempatureSwitch';
import DotMenu from './DotMenu';


const TempStyleText = styled.Text`
font-size: 72px;
font-weight: 600; 
color: #B9DFF0;

text-shadow: -2px -3px 4px rgba(216, 169, 169, 0.66);

`;

const TempShadowStyleText = styled.Text`
position: absolute;
font-size: 72px;
font-weight: 600; 
color: #B9DFF0;
text-shadow: 3px 3px 8px #000000;
`;


const FeelsStyleText = styled.Text`
font-size: 14px;
font-weight: 500;
color: #9CB4DC;
text-shadow: -1px -1px 1px rgba(255, 255, 255, 0.28);

`;

const FeelsShadowStyleText = styled.Text`
position: absolute;
font-size: 14px;
font-weight: 500; 
color: #9CB4DC;
text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.62);
`;

const styles = StyleSheet.create({
  menuRow: {
    flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: '5%', paddingTop: 10,
  },
  locationRow: {
    flexDirection: 'row', justifyContent: 'center', paddingTop: 2,
  },
  location: {
    fontWeight: 'bold',
    fontSize: 27,
    color: '#CDEAFB',
  },
  timeRow: {
    flexDirection: 'row', justifyContent: 'center', paddingTop: 1, paddingBottom: 14,
  },
  time: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#CDFBF7',
  },
  tempRow: {
    flexDirection: 'row', justifyContent: 'center', paddingTop: 1, paddingLeft: '4%',
  },

  feelsRow: {
    flexDirection: 'row', justifyContent: 'center',
  },
  feels: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#CDFBF7',
  },
  conditionsRow: {
    flexDirection: 'row', justifyContent: 'center', paddingTop: '2%', paddingBottom: 14,
  },
  conditions: {
    fontWeight: 'normal',
    fontSize: 24,
    color: '#B9DFF0',
  },
});

const NowSection = ({}) => (
  <View>


    <View style={styles.menuRow}>
      <TempatureSwitch />
      <DotMenu />
    </View>
    <View style={styles.locationRow}>
      <Text style={styles.location}>Vancouver</Text>
    </View>
    <View style={styles.timeRow}>
      <Text style={styles.time}>6:39 p.m.</Text>
    </View>

    <IconPlatform />

    <View style={styles.tempRow}>
      <View>
        <TempStyleText>32°</TempStyleText>
        <TempShadowStyleText>32°</TempShadowStyleText>
      </View>
    </View>
    <View style={styles.feelsRow}>
      <FeelsStyleText>Feels 29°</FeelsStyleText>
      <FeelsShadowStyleText>Feels 29°</FeelsShadowStyleText>
    </View>
    <View style={styles.conditionsRow}>
      <Text style={styles.conditions}>Partly Cloudy</Text>
    </View>


  </View>


);

export default NowSection;
