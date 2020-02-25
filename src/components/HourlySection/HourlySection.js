import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';


import Svg, { Path, Ellipse, Rect } from 'react-native-svg';
import MenuSwitch from './MenuSwitch';
import HourlyButton from './HourlyButton';
import HourlyScroll from './HourScroll';
import Cursor from './Cursor';
import hourlyButtons from '../../data/hourly_buttons_data.json';


function DailySection() {
  const [onId, setOnId] = useState(1);
  const [display, setDisplay] = useState(1);


  let displayButtons = displayButtons = hourlyButtons.slice(0, 5);
  switch (display) {
    case 1: displayButtons = hourlyButtons.slice(0, 5);
      break;
    case 2: displayButtons = hourlyButtons.slice(5, 10);
      break;
    case 3: displayButtons = hourlyButtons.slice(10, 15);
      break;
    default: displayButtons = hourlyButtons.slice(0, 5);
  }


  return (
    <View>
      {}
      <View style={{
        flexDirection: 'row', alignContent: 'center', alignItems: 'center', height: 40, paddingVertical: 30,
      }}
      >

        <Cursor setDisplay={setDisplay} />
        <View style={{ position: 'absolute' }}>
          <MenuSwitch />
        </View>


        <View style={{
          flexDirection: 'row', justifyContent: 'center', position: 'absolute', width: '100%', height: 40, alignItems: 'center',
        }}
        >
          <Text style={{ color: '#B9DFF0' }}>Hourly</Text>
        </View>
      </View>
      <View style={{
        flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 4, paddingHorizontal: '4%',
      }}
      >
        {displayButtons.map((button) => (

          <HourlyButton key={button.id} id={button.id} button={button.button} icon={button.icon} onId={onId} setOnId={setOnId} />

        ))}

      </View>
      <View style={{
        flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 4,
      }}
      >

        <HourlyScroll />

      </View>
    </View>
  );
}

export default DailySection;
