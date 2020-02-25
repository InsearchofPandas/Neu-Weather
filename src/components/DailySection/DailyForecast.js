import React from 'react';
import { ProgressCircle } from 'react-native-svg-charts';
import {
  StyleSheet, Text, View, ScrollView,
} from 'react-native';
import InsetShadow from 'react-native-inset-shadow';
import LightPlatform from './LightPlatform';


function DailyForecast() {
  return (
    <View style={{
      paddingHorizontal: '5%',
    }}
    >
      <View

        style={{
          marginVertical: 10, flex: 1, backgroundColor: '#283347',
        }}
      >
        <InsetShadow top={false} left={false} shadowColor="#B2CDF5" shadowOpacity={1} shadowRadius={7} rounded={3}>
          <InsetShadow bottom={false} right={false} shadowOpacity={1} shadowRadius={7} rounded={3}>
            <View

              style={{
                marginVertical: 10, backgroundColor: '#283347', marginHorizontal: 10,
              }}
            >
              <Text>hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh</Text>
              <View style={{ alignItems: 'center', marginTop: 30 }}>
                <Text style={{ fontSize: 18, color: '#B9DFF0' }}> Daylight Remaining:</Text>
                <LightPlatform />

              </View>
            </View>
          </InsetShadow>
        </InsetShadow>
      </View>
    </View>
  );
}

export default DailyForecast;
