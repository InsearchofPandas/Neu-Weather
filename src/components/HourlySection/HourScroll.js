import React from 'react';

import {
  StyleSheet, Text, View, ScrollView,
} from 'react-native';
import InsetShadow from 'react-native-inset-shadow';


function HourScroll() {
  return (
    <ScrollView
      horizontal
      style={{
        marginVertical: 10, flex: 1, height: 100, width: 700, backgroundColor: '#283347',
      }}

    >
      <InsetShadow top={false} left={false} shadowColor="#B2CDF5" shadowOpacity={1} shadowRadius={7} rounded={3}>
        <InsetShadow bottom={false} right={false} shadowOpacity={1} shadowRadius={7} rounded={3}>
          <View

            style={{
              marginVertical: 10, flex: 1, height: 100, width: 700, backgroundColor: '#283347', marginHorizontal: 10,
            }}
          >
            <Text>hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh</Text>

          </View>
        </InsetShadow>
      </InsetShadow>
    </ScrollView>
  );
}

export default HourScroll;
