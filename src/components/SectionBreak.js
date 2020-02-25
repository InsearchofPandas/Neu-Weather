import React from 'react';
import { View } from 'react-native';
import InsetShadow from 'react-native-inset-shadow';

function SectionBreak() {
  return (


    <View style={{ flexDirection: 'row', justifyContent: 'center', width: '100%' }}>
      <View style={{
        height: 4, width: '90%', backgroundColor: '#34435C', borderRadius: 20,
      }}
      >
        <InsetShadow top={false} left={false} shadowColor="#B2CDF5" shadowOpacity={0.66} shadowRadius={4} rounded={20}>
          <InsetShadow bottom={false} right={false} shadowOpacity={0.77} shadowRadius={7} rounded={20}><View/></InsetShadow>
        </InsetShadow>
      </View>
    </View>
  );
}

export default SectionBreak;
