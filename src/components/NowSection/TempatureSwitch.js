import React from 'react';
import InsetShadow from 'react-native-inset-shadow';
import styled, { ThemeProvider } from 'styled-components/native';
import {
  StyleSheet, Text, View,
} from 'react-native';

const TempStyleText = styled.Text`
font-size: 22px;
font-weight: 600; 
color: #6D80A1;

text-shadow: -1px -1px 3px rgba(212, 223, 239, 0.2);

`;

const TempShadowStyleText = styled.Text`
position: absolute;
font-size: 22px;
font-weight: 600; 
color: #6D80A1;
text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.3);
`;

const styles = StyleSheet.create({
  indent: {
    height: 40, width: 65, flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 14, alignItems: 'center', borderRadius: 3,
  },
  font: { color: '#6D80A1', fontSize: 22, fontWeight: '600' },
});

const TempatureSwitch = () => (
  <View style={styles.indent}>
    <InsetShadow top={false} left={false} shadowColor="#B2CDF5" shadowOpacity={0.77} shadowRadius={11} rounded={3}>
      <InsetShadow bottom={false} right={false} shadowOpacity={1} shadowRadius={11} rounded={3}>
        <View style={styles.indent}>
          <View>
            <TempShadowStyleText>f</TempShadowStyleText>
            <TempStyleText>f</TempStyleText>
          </View>
          <View>
            <TempShadowStyleText>c</TempShadowStyleText>
            <TempStyleText>c</TempStyleText>
          </View>
        </View>
      </InsetShadow>
    </InsetShadow>
  </View>
);

export default TempatureSwitch;
