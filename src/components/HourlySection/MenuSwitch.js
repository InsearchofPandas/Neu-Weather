import React from 'react';
import InsetShadow from 'react-native-inset-shadow';
import styled, { ThemeProvider } from 'styled-components/native';
import {
  StyleSheet, Text, View, Image,
} from 'react-native';

import Cursor from './Cursor';

const width = 120;
const count = 3;
const height = 40;


const TempStyleText = styled.Text`
font-size: 18px;

color: #6D80A1;

text-shadow: -1px -1px 1px rgba(212, 223, 239, 0.14);

`;

const TempShadowStyleText = styled.Text`
position: absolute;
font-size: 18px;

color: #6D80A1;
text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.3);
`;

const styles = StyleSheet.create({
  indent: {
    height,
    width,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 14,
    alignItems: 'center',
    borderRadius: 26,
  },
  size: {
    height,
    width,
  },
  font: { color: '#6D80A1', fontSize: 18 },
});

const MenuSwitch = () => {
  const x = 0;
  return (
    <View
      style={styles.size}
    >
      <View style={{ paddingLeft: '3%' }}>
        <InsetShadow top={false} left={false} shadowColor="#B2CDF5" shadowOpacity={0.7} shadowRadius={20} rounded={26}>
          <InsetShadow bottom={false} right={false} shadowOpacity={1} shadowRadius={20} rounded={26}>
            <View style={styles.indent}>

              <View>
                <TempShadowStyleText>1</TempShadowStyleText>
                <TempStyleText>1</TempStyleText>
              </View>
              <View>
                <TempShadowStyleText>2</TempShadowStyleText>
                <TempStyleText>2</TempStyleText>
              </View>
              <View>
                <TempShadowStyleText>3</TempShadowStyleText>
                <TempStyleText>3</TempStyleText>
              </View>
            </View>
          </InsetShadow>
        </InsetShadow>
      </View>


    </View>
  );
};

export default MenuSwitch;
